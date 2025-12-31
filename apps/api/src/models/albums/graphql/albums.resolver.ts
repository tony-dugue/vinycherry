import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { AllowAuthenticated } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { AlbumsService } from './albums.service'
import { CreateAlbumInput } from './dtos/create-album.input'
import { FindManyAlbumArgs, FindUniqueAlbumArgs } from './dtos/find.args'
import { UpdateAlbumInput } from './dtos/update-album.input'
import { Album } from './entity/album.entity'

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
}
