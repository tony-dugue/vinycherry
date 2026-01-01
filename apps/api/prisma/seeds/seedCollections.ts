import { PrismaService } from '../../src/common/prisma/prisma.service'
import { Condition } from '../../prisma/generated/prisma/client'

export async function seedCollections(prisma: PrismaService) {
  const members = await prisma.member.findMany()
  const versions = await prisma.albumVersion.findMany()

  for (const member of members) {
    for (const version of versions.slice(0, 2)) {
      const item = await prisma.collectionItem.create({
        data: {
          memberId: member.uid,
          albumVersionId: version.id,
          condition: Condition.VERY_GOOD,
        },
      })

      await prisma.purchaseInfo.create({
        data: {
          collectionItemId: item.id,
          price: 15 + Math.random() * 20,
          place: 'Local record store',
          date: new Date(2020 + Math.floor(Math.random() * 4), 5, 12),
        },
      })
    }
  }

  console.log('✅ Collections seeded')
}
