import { PrismaService } from '../../src/common/prisma/prisma.service'
import { musicians } from './data/musicians'

export async function seedMusicians(prisma: PrismaService) {
  for (const musician of musicians) {
    const group = await prisma.group.findFirst({
      where: { name: musician.group },
    })
    if (!group) continue

    const gm = await prisma.groupMusician.create({
      data: {
        name: musician.name,
        role: musician.role,
        startYear: musician.startYear,
        endYear: musician.endYear,
        groupId: group.id,
      },
    })

    for (const instrumentName of musician.instruments) {
      const instrument = await prisma.instrument.findUnique({
        where: { name: instrumentName },
      })
      if (!instrument) continue

      await prisma.groupMusicianInstrument.create({
        data: {
          groupMusicianId: gm.id,
          instrumentId: instrument.id,
        },
      })
    }
  }

  console.log('✅ Musicians seeded')
}
