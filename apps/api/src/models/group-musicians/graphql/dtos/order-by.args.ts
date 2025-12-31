import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { GroupMusicianInstrumentOrderByRelationAggregateInput } from 'src/models/group-musician-instruments/graphql/dtos/order-by.args'
import { GroupOrderByWithRelationInput } from 'src/models/groups/graphql/dtos/order-by.args'

@InputType()
export class GroupMusicianOrderByWithRelationInputStrict implements RestrictProperties<
  GroupMusicianOrderByWithRelationInputStrict,
  Prisma.GroupMusicianOrderByWithRelationInput
> {
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  role: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  startYear: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  endYear: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  groupId: Prisma.SortOrder

  Group: GroupOrderByWithRelationInput
  Instruments: GroupMusicianInstrumentOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class GroupMusicianOrderByWithRelationInput extends PartialType(
  GroupMusicianOrderByWithRelationInputStrict,
) {}

@InputType()
export class GroupMusicianOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
