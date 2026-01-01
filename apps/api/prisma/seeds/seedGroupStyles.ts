import { PrismaService } from '../../src/common/prisma/prisma.service'
import { groups } from './data/groups'

export async function seedGroupStyles(prisma: PrismaService) {
  for (const group of groups) {
    const dbGroup = await prisma.group.findFirst({
      where: { name: group.name },
    })

    if (!dbGroup) continue

    for (const styleName of group.styles) {
      const style = await prisma.musicStyle.findUnique({
        where: { name: styleName },
      })

      if (!style) continue

      await prisma.groupStyle.create({
        data: {
          groupId: dbGroup.id,
          styleId: style.id,
        },
      })
    }
  }
  console.log('✅ Group styles linked')
}
