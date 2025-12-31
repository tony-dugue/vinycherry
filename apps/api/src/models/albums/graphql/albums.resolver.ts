import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { AllowAuthenticated } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { AlbumVersion } from 'src/models/album-versions/graphql/entity/album-version.entity'
import { ExternalSource } from 'src/models/external-sources/graphql/entity/external-source.entity'
import { Track } from 'src/models/tracks/graphql/entity/track.entity'
import { AlbumsService } from './albums.service'
import { CreateAlbumInput } from './dtos/create-album.input'
import { FindManyAlbumArgs, FindUniqueAlbumArgs } from './dtos/find.args'
import { UpdateAlbumInput } from './dtos/update-album.input'
import { Album } from './entity/album.entity'
import { Group } from 'src/models/groups/graphql/entity/group.entity'

@Resolver(() => Album)
export class AlbumsResolver {
  constructor(
    private readonly albumsService: AlbumsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Album)
  createAlbum(@Args('createAlbumInput') args: CreateAlbumInput) {
    return this.albumsService.create(args)
  }

  @Query(() => [Album], { name: 'albums' })
  findAll(@Args() args: FindManyAlbumArgs) {
    return this.albumsService.findAll(args)
  }

  @Query(() => Album, { name: 'album' })
  findOne(@Args() args: FindUniqueAlbumArgs) {
    return this.albumsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Album)
  async updateAlbum(@Args('updateAlbumInput') args: UpdateAlbumInput) {
    return this.albumsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Album)
  async removeAlbum(@Args() args: FindUniqueAlbumArgs) {
    return this.albumsService.remove(args)
  }

  @ResolveField(() => Group)
  group(@Parent() album: Album) {
    return this.prisma.group.findUnique({
      where: { id: album.groupId },
    })
  }

  @ResolveField(() => [Track])
  tracks(@Parent() album: Album) {
    return this.prisma.track.findMany({
      where: { albumId: album.id },
    })
  }

  @ResolveField(() => [AlbumVersion])
  versions(@Parent() album: Album) {
    return this.prisma.albumVersion.findMany({
      where: { albumId: album.id },
    })
  }

  @ResolveField(() => [ExternalSource])
  sources(@Parent() album: Album) {
    return this.prisma.externalSource.findMany({
      where: { albumId: album.id },
    })
  }
}
