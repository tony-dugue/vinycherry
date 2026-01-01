import { PrismaService } from '../../src/common/prisma/prisma.service'
import { tracks } from './data/tracks'

export async function seedTracks(prisma: PrismaService) {
  for (const albumData of tracks) {
    const album = await prisma.album.findFirst({
      where: { title: albumData.album },
    })
    if (!album) continue

    for (const track of albumData.tracks) {
      await prisma.track.create({
        data: {
          title: track.title,
          position: track.position,
          duration: track.duration,
          albumId: album.id,
        },
      })
    }
  }

  console.log('✅ Tracks seeded')
}
