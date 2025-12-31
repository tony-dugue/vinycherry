import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { GroupOrderByWithRelationInput } from 'src/models/groups/graphql/dtos/order-by.args'
import { MusicStyleOrderByWithRelationInput } from 'src/models/music-styles/graphql/dtos/order-by.args'

@InputType()
export class GroupStyleOrderByWithRelationInputStrict implements RestrictProperties<
  GroupStyleOrderByWithRelationInputStrict,
  Prisma.GroupStyleOrderByWithRelationInput
> {
  @Field(() => Prisma.SortOrder)
  groupId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  styleId: Prisma.SortOrder

  Group: GroupOrderByWithRelationInput
  MusicStyle: MusicStyleOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class GroupStyleOrderByWithRelationInput extends PartialType(
  GroupStyleOrderByWithRelationInputStrict,
) {}

@InputType()
export class GroupStyleOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
