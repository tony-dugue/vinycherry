import 'dotenv/config'
import { constants } from 'fs'
import { access, copyFile, mkdir, readdir } from 'fs/promises'
import * as path from 'path'
import { PrismaService } from '../src/common/prisma/prisma.service'
import { seedAlbums } from './seeds/seedAlbums'
import { seedAlbumVersions } from './seeds/seedAlbumVersions'
import { seedCollectionItems } from './seeds/seedCollectionItems'
import { seedCollections } from './seeds/seedCollections'
import { seedExternalSources } from './seeds/seedExternalSources'
import { seedGroups } from './seeds/seedGroups'
import { seedGroupStyles } from './seeds/seedGroupStyles'
import { seedInstruments } from './seeds/seedInstruments'
import { seedMusicians } from './seeds/seedMusicians'
import { seedMusicStyles } from './seeds/seedMusicStyles'
import { seedPurchaseInfos } from './seeds/seedPurchaseInfos'
import { seedUsers } from './seeds/seedUsers'

const prisma = new PrismaService()

async function main() {
  // seed users with different role
  await seedUsers(prisma)
  await seedMusicStyles(prisma)
  await seedGroups(prisma)
  await seedGroupStyles(prisma)
  await seedInstruments(prisma)
  await seedMusicians(prisma)
  await seedAlbums(prisma)
  await seedCollections(prisma)
  await seedAlbumVersions(prisma)
  await seedExternalSources(prisma)
  await seedCollectionItems(prisma)
  await seedPurchaseInfos(prisma)

  // copié les images dans le dossier uploads
  await copyImagesToUploadsDir()
}

async function copyImagesToUploadsDir() {
  const sourceDir = path.resolve(__dirname, 'seeds', 'images') // api/prisma/seeds/images
  const destDir = path.resolve(__dirname, '..', 'uploads') // api/uploads

  try {
    await mkdir(destDir, { recursive: true }) // crée uploads/ si pas encore là

    const files = await readdir(sourceDir)

    for (const file of files) {
      const src = path.join(sourceDir, file)
      const dest = path.join(destDir, file)

      try {
        await access(dest, constants.F_OK) // Vérifie si le fichier existe
      } catch {
        await copyFile(src, dest)
      }
    }

    console.log('✅ Images copied to uploads directory')
  } catch (error) {
    console.error('❌ Error copying images:', error)
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
