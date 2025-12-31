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
import { Album } from 'src/models/albums/graphql/entity/album.entity'
import { CollectionItem } from 'src/models/collection-items/graphql/entity/collection-item.entity'
import { AlbumVersionsService } from './album-versions.service'
import { CreateAlbumVersionInput } from './dtos/create-album-version.input'
import {
  FindManyAlbumVersionArgs,
  FindUniqueAlbumVersionArgs,
} from './dtos/find.args'
import { UpdateAlbumVersionInput } from './dtos/update-album-version.input'
import { AlbumVersion } from './entity/album-version.entity'

@Resolver(() => AlbumVersion)
export class AlbumVersionsResolver {
  constructor(
    private readonly albumVersionsService: AlbumVersionsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => AlbumVersion)
  createAlbumVersion(
    @Args('createAlbumVersionInput') args: CreateAlbumVersionInput,
  ) {
    return this.albumVersionsService.create(args)
  }

  @Query(() => [AlbumVersion], { name: 'albumVersions' })
  findAll(@Args() args: FindManyAlbumVersionArgs) {
    return this.albumVersionsService.findAll(args)
  }

  @Query(() => AlbumVersion, { name: 'albumVersion' })
  findOne(@Args() args: FindUniqueAlbumVersionArgs) {
    return this.albumVersionsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => AlbumVersion)
  async updateAlbumVersion(
    @Args('updateAlbumVersionInput') args: UpdateAlbumVersionInput,
  ) {
    return this.albumVersionsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => AlbumVersion)
  async removeAlbumVersion(@Args() args: FindUniqueAlbumVersionArgs) {
    return this.albumVersionsService.remove(args)
  }

  @ResolveField(() => Album)
  album(@Parent() version: AlbumVersion) {
    return this.prisma.album.findUnique({
      where: { id: version.albumId },
    })
  }

  @ResolveField(() => [CollectionItem])
  collectionItems(@Parent() version: AlbumVersion) {
    return this.prisma.collectionItem.findMany({
      where: { albumVersionId: version.id },
    })
  }
}
