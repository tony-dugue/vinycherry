import { PrismaService } from '../../src/common/prisma/prisma.service'
import { groups } from './data/groups'

export async function seedGroups(prisma: PrismaService) {
  for (const group of groups) {
    await prisma.group.create({
      data: {
        name: group.name,
        description: group.description,
        image: group.image,
      },
    })
  }
  console.log('✅ Groups seeded')
}
