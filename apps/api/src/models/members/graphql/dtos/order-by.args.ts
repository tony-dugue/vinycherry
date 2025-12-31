import { Field, InputType, PartialType } from '@nestjs/graphql'

import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CollectionItemOrderByRelationAggregateInput } from 'src/models/collection-items/graphql/dtos/order-by.args'
import { UserOrderByWithRelationInput } from 'src/models/users/graphql/dtos/order-by.args'

@InputType()
export class MemberOrderByWithRelationInputStrict implements RestrictProperties<
  MemberOrderByWithRelationInputStrict,
  Prisma.MemberOrderByWithRelationInput
> {
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  displayName: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder

  User: UserOrderByWithRelationInput
  CollectionItems: CollectionItemOrderByRelationAggregateInput
}

@InputType()
export class MemberOrderByWithRelationInput extends PartialType(
  MemberOrderByWithRelationInputStrict,
) {}

@InputType()
export class MemberOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
