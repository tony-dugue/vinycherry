import { PrismaService } from '../../src/common/prisma/prisma.service'
import { Condition } from '../../prisma/generated/prisma/client'

const CONDITIONS = [
  Condition.MINT,
  Condition.VERY_GOOD,
  Condition.GOOD,
  Condition.FAIR,
]

export async function seedCollectionItems(prisma: PrismaService) {
  const members = await prisma.member.findMany()
  const versions = await prisma.albumVersion.findMany()

  for (const member of members) {
    const ownedVersions = versions
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(Math.random() * 10) + 5)

    for (const version of ownedVersions) {
      await prisma.collectionItem.create({
        data: {
          memberId: member.uid,
          albumVersionId: version.id,
          condition: CONDITIONS[Math.floor(Math.random() * CONDITIONS.length)],
          notes: Math.random() > 0.7 ? 'État impeccable' : null,
        },
      })
    }
  }

  console.log('✅ CollectionItems seeded')
}
