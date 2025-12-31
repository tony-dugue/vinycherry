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
import { CreateTrackInput } from './dtos/create-track.input'
import { FindManyTrackArgs, FindUniqueTrackArgs } from './dtos/find.args'
import { UpdateTrackInput } from './dtos/update-track.input'
import { Track } from './entity/track.entity'
import { TracksService } from './tracks.service'

@Resolver(() => Track)
export class TracksResolver {
  constructor(
    private readonly tracksService: TracksService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Track)
  createTrack(@Args('createTrackInput') args: CreateTrackInput) {
    return this.tracksService.create(args)
  }

  @Query(() => [Track], { name: 'tracks' })
  findAll(@Args() args: FindManyTrackArgs) {
    return this.tracksService.findAll(args)
  }

  @Query(() => Track, { name: 'track' })
  findOne(@Args() args: FindUniqueTrackArgs) {
    return this.tracksService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Track)
  async updateTrack(@Args('updateTrackInput') args: UpdateTrackInput) {
    return this.tracksService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Track)
  async removeTrack(@Args() args: FindUniqueTrackArgs) {
    return this.tracksService.remove(args)
  }

  @ResolveField(() => Album)
  album(@Parent() track: Track) {
    return this.prisma.album.findUnique({
      where: { id: track.albumId },
    })
  }
}
