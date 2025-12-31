import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { GroupStyleOrderByRelationAggregateInput } from 'src/models/group-styles/graphql/dtos/order-by.args'

@InputType()
export class MusicStyleOrderByWithRelationInputStrict implements RestrictProperties<
  MusicStyleOrderByWithRelationInputStrict,
  Prisma.MusicStyleOrderByWithRelationInput
> {
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder

  Groups: GroupStyleOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class MusicStyleOrderByWithRelationInput extends PartialType(
  MusicStyleOrderByWithRelationInputStrict,
) {}

@InputType()
export class MusicStyleOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
