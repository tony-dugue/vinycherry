import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { AllowAuthenticated } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateMusicStyleInput } from './dtos/create-music-style.input'
import {
  FindManyMusicStyleArgs,
  FindUniqueMusicStyleArgs,
} from './dtos/find.args'
import { UpdateMusicStyleInput } from './dtos/update-music-style.input'
import { MusicStyle } from './entity/music-style.entity'
import { MusicStylesService } from './music-styles.service'

@Resolver(() => MusicStyle)
export class MusicStylesResolver {
  constructor(
    private readonly musicStylesService: MusicStylesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => MusicStyle)
  createMusicStyle(@Args('createMusicStyleInput') args: CreateMusicStyleInput) {
    return this.musicStylesService.create(args)
  }

  @Query(() => [MusicStyle], { name: 'musicStyles' })
  findAll(@Args() args: FindManyMusicStyleArgs) {
    return this.musicStylesService.findAll(args)
  }

  @Query(() => MusicStyle, { name: 'musicStyle' })
  findOne(@Args() args: FindUniqueMusicStyleArgs) {
    return this.musicStylesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => MusicStyle)
  async updateMusicStyle(
    @Args('updateMusicStyleInput') args: UpdateMusicStyleInput,
  ) {
    return this.musicStylesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => MusicStyle)
  async removeMusicStyle(@Args() args: FindUniqueMusicStyleArgs) {
    return this.musicStylesService.remove(args)
  }
}
