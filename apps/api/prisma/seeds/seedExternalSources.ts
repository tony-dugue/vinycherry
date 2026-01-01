import { PrismaService } from '../../src/common/prisma/prisma.service'
import { ExternalSourceType } from '../../prisma/generated/prisma/client'

export async function seedExternalSources(prisma: PrismaService) {
  const albums = await prisma.album.findMany()

  for (const album of albums) {
    await prisma.externalSource.createMany({
      data: [
        {
          source: ExternalSourceType.MUSICBRAINZ,
          externalId: `mb-${album.id}-${Date.now()}`,
          albumId: album.id,
        },
        {
          source: ExternalSourceType.DISCOGS,
          externalId: `discogs-${album.id}`,
          albumId: album.id,
        },
        {
          source: ExternalSourceType.SPOTIFY,
          externalId: `spotify:album:${album.id}`,
          albumId: album.id,
        },
      ],
    })
  }

  console.log('✅ ExternalSources seeded')
}
