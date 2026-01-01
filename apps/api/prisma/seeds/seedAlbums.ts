import { PrismaService } from '../../src/common/prisma/prisma.service'
import { albums } from './data/albums'

export async function seedAlbums(prisma: PrismaService) {
  for (const album of albums) {
    const group = await prisma.group.findFirst({
      where: { name: album.group },
    })
    if (!group) continue

    const createdAlbum = await prisma.album.create({
      data: {
        title: album.title,
        releaseDate: new Date(`${album.year}-01-01`),
        coverUrl: album.coverUrl,
        groupId: group.id,
      },
    })

    for (let i = 0; i < album.tracks.length; i++) {
      await prisma.track.create({
        data: {
          title: album.tracks[i],
          position: i + 1,
          duration: 180 + i * 20,
          albumId: createdAlbum.id,
        },
      })
    }
  }

  console.log('✅ Albums & tracks seeded')
}
