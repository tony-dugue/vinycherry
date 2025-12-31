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
import { GroupMusicianInstrument } from 'src/models/group-musician-instruments/graphql/entity/group-musician-instrument.entity'
import { CreateInstrumentInput } from './dtos/create-instrument.input'
import {
  FindManyInstrumentArgs,
  FindUniqueInstrumentArgs,
} from './dtos/find.args'
import { UpdateInstrumentInput } from './dtos/update-instrument.input'
import { Instrument } from './entity/instrument.entity'
import { InstrumentsService } from './instruments.service'

@Resolver(() => Instrument)
export class InstrumentsResolver {
  constructor(
    private readonly instrumentsService: InstrumentsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Instrument)
  createInstrument(@Args('createInstrumentInput') args: CreateInstrumentInput) {
    return this.instrumentsService.create(args)
  }

  @Query(() => [Instrument], { name: 'instruments' })
  findAll(@Args() args: FindManyInstrumentArgs) {
    return this.instrumentsService.findAll(args)
  }

  @Query(() => Instrument, { name: 'instrument' })
  findOne(@Args() args: FindUniqueInstrumentArgs) {
    return this.instrumentsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Instrument)
  async updateInstrument(
    @Args('updateInstrumentInput') args: UpdateInstrumentInput,
  ) {
    return this.instrumentsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Instrument)
  async removeInstrument(@Args() args: FindUniqueInstrumentArgs) {
    return this.instrumentsService.remove(args)
  }

  @ResolveField(() => [GroupMusicianInstrument])
  musicians(@Parent() instrument: Instrument) {
    return this.prisma.groupMusicianInstrument.findMany({
      where: { instrumentId: instrument.id },
    })
  }
}
