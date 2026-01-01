import { PrismaService } from '../../src/common/prisma/prisma.service'

const PLACES = [
  'Fnac',
  'Discogs Marketplace',
  'Disquaire indépendant',
  'Amazon',
  'Bourse aux disques',
]

export async function seedPurchaseInfos(prisma: PrismaService) {
  const items = await prisma.collectionItem.findMany({
    where: { Purchase: null },
  })

  for (const item of items) {
    if (Math.random() < 0.2) continue // 20% sans infos d'achat

    await prisma.purchaseInfo.create({
      data: {
        price: Number((Math.random() * 40 + 10).toFixed(2)),
        place: PLACES[Math.floor(Math.random() * PLACES.length)],
        date: randomPastDate(2000),
        collectionItemId: item.id,
      },
    })
  }

  console.log('✅ PurchaseInfos seeded')
}

function randomPastDate(startYear: number) {
  const start = new Date(startYear, 0, 1).getTime()
  const end = Date.now()
  return new Date(start + Math.random() * (end - start))
}
