import { PrismaService } from '../../src/common/prisma/prisma.service'
import { instruments } from './data/instruments'

export async function seedInstruments(prisma: PrismaService) {
  for (const name of instruments) {
    await prisma.instrument.upsert({
      where: { name },
      update: {},
      create: { name },
    })
  }
  console.log('✅ Instruments seeded')
}
