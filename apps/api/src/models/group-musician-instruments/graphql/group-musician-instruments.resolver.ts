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
import { GroupMusician } from 'src/models/group-musicians/graphql/entity/group-musician.entity'
import { Instrument } from 'src/models/instruments/graphql/entity/instrument.entity'
import { CreateGroupMusicianInstrumentInput } from './dtos/create-group-musician-instrument.input'
import {
  FindManyGroupMusicianInstrumentArgs,
  FindUniqueGroupMusicianInstrumentArgs,
} from './dtos/find.args'
import { UpdateGroupMusicianInstrumentInput } from './dtos/update-group-musician-instrument.input'
import { GroupMusicianInstrument } from './entity/group-musician-instrument.entity'
import { GroupMusicianInstrumentsService } from './group-musician-instruments.service'

@Resolver(() => GroupMusicianInstrument)
export class GroupMusicianInstrumentsResolver {
  constructor(
    private readonly groupMusicianInstrumentsService: GroupMusicianInstrumentsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => GroupMusicianInstrument)
  createGroupMusicianInstrument(
    @Args('createGroupMusicianInstrumentInput')
    args: CreateGroupMusicianInstrumentInput,
  ) {
    return this.groupMusicianInstrumentsService.create(args)
  }

  @Query(() => [GroupMusicianInstrument], { name: 'groupMusicianInstruments' })
  findAll(@Args() args: FindManyGroupMusicianInstrumentArgs) {
    return this.groupMusicianInstrumentsService.findAll(args)
  }

  @Query(() => GroupMusicianInstrument, { name: 'groupMusicianInstrument' })
  findOne(@Args() args: FindUniqueGroupMusicianInstrumentArgs) {
    return this.groupMusicianInstrumentsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => GroupMusicianInstrument)
  async updateGroupMusicianInstrument(
    @Args('updateGroupMusicianInstrumentInput')
    args: UpdateGroupMusicianInstrumentInput,
  ) {
    return this.groupMusicianInstrumentsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => GroupMusicianInstrument)
  async removeGroupMusicianInstrument(
    @Args() args: FindUniqueGroupMusicianInstrumentArgs,
  ) {
    return this.groupMusicianInstrumentsService.remove(args)
  }

  @ResolveField(() => GroupMusician)
  groupMusician(@Parent() gmi: GroupMusicianInstrument) {
    return this.prisma.groupMusician.findUnique({
      where: { id: gmi.groupMusicianId },
    })
  }

  @ResolveField(() => Instrument)
  instrument(@Parent() gmi: GroupMusicianInstrument) {
    return this.prisma.instrument.findUnique({
      where: { id: gmi.instrumentId },
    })
  }
}
