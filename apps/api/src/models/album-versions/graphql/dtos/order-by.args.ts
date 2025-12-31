import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { AlbumOrderByWithRelationInput } from 'src/models/albums/graphql/dtos/order-by.args'
import { CollectionItemOrderByRelationAggregateInput } from 'src/models/collection-items/graphql/dtos/order-by.args'

@InputType()
export class AlbumVersionOrderByWithRelationInputStrict implements RestrictProperties<
  AlbumVersionOrderByWithRelationInputStrict,
  Prisma.AlbumVersionOrderByWithRelationInput
> {
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  format: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  year: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  albumId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder

  Album: AlbumOrderByWithRelationInput
  CollectionItems: CollectionItemOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class AlbumVersionOrderByWithRelationInput extends PartialType(
  AlbumVersionOrderByWithRelationInputStrict,
) {}

@InputType()
export class AlbumVersionOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
