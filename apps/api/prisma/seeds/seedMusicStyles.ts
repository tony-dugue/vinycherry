import { PrismaService } from '../../src/common/prisma/prisma.service'
import { musicStyles } from './data/styles'

export async function seedMusicStyles(prisma: PrismaService) {
  for (const name of musicStyles) {
    await prisma.musicStyle.upsert({
      where: { name },
      update: {},
      create: { name },
    })
  }
  console.log('✅ Music styles seeded')
}
