import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { GroupMusicianInstrumentOrderByRelationAggregateInput } from 'src/models/group-musician-instruments/graphql/dtos/order-by.args'

@InputType()
export class InstrumentOrderByWithRelationInputStrict implements RestrictProperties<
  InstrumentOrderByWithRelationInputStrict,
  Prisma.InstrumentOrderByWithRelationInput
> {
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder

  Musicians: GroupMusicianInstrumentOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class InstrumentOrderByWithRelationInput extends PartialType(
  InstrumentOrderByWithRelationInputStrict,
) {}

@InputType()
export class InstrumentOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
