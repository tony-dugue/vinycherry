import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CollectionItemOrderByWithRelationInput } from 'src/models/collection-items/graphql/dtos/order-by.args'

@InputType()
export class PurchaseInfoOrderByWithRelationInputStrict implements RestrictProperties<
  PurchaseInfoOrderByWithRelationInputStrict,
  Prisma.PurchaseInfoOrderByWithRelationInput
> {
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  price: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  place: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  date: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  collectionItemId: Prisma.SortOrder

  CollectionItem: CollectionItemOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class PurchaseInfoOrderByWithRelationInput extends PartialType(
  PurchaseInfoOrderByWithRelationInputStrict,
) {}

@InputType()
export class PurchaseInfoOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
