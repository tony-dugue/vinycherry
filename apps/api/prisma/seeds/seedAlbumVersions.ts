import { SupportType } from '../../prisma/generated/prisma/client'
import { PrismaService } from '../../src/common/prisma/prisma.service'

const VERSION_TEMPLATES = [
  { name: 'Standard', format: SupportType.CD },
  { name: 'Vinyl Original', format: SupportType.VINYL },
  { name: 'Remastered', format: SupportType.DIGITAL },
  { name: 'Collector Edition', format: SupportType.BOX },
]

export async function seedAlbumVersions(prisma: PrismaService) {
  const albums = await prisma.album.findMany()

  for (const album of albums) {
    const nbVersions = Math.floor(Math.random() * 3) + 2

    for (let i = 0; i < nbVersions; i++) {
      const template = VERSION_TEMPLATES[i]

      await prisma.albumVersion.create({
        data: {
          name: template.name,
          format: template.format,
          year: album.releaseDate ? album.releaseDate.getFullYear() : undefined,
          albumId: album.id,
        },
      })
    }
  }

  console.log('✅ AlbumVersions seeded')
}
