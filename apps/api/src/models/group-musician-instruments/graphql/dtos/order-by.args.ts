import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { GroupMusicianOrderByWithRelationInput } from 'src/models/group-musicians/graphql/dtos/order-by.args'
import { InstrumentOrderByWithRelationInput } from 'src/models/instruments/graphql/dtos/order-by.args'

@InputType()
export class GroupMusicianInstrumentOrderByWithRelationInputStrict implements RestrictProperties<
  GroupMusicianInstrumentOrderByWithRelationInputStrict,
  Prisma.GroupMusicianInstrumentOrderByWithRelationInput
> {
  @Field(() => Prisma.SortOrder)
  groupMusicianId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  instrumentId: Prisma.SortOrder

  GroupMusician: GroupMusicianOrderByWithRelationInput
  Instrument: InstrumentOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class GroupMusicianInstrumentOrderByWithRelationInput extends PartialType(
  GroupMusicianInstrumentOrderByWithRelationInputStrict,
) {}

@InputType()
export class GroupMusicianInstrumentOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
