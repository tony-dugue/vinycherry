import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { MemberOrderByWithRelationInput } from 'src/models/members/graphql/dtos/order-by.args'

@InputType()
export class UserOrderByWithRelationInputStrict implements RestrictProperties<
  UserOrderByWithRelationInputStrict,
  Omit<
    Prisma.UserOrderByWithRelationInput,
    'Credentials' | 'AuthProvider' | 'Admin' | 'image'
  >
> {
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder

  Member: MemberOrderByWithRelationInput
}

@InputType()
export class UserOrderByWithRelationInput extends PartialType(
  UserOrderByWithRelationInputStrict,
) {}

@InputType()
export class UserOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
