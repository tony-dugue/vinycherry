import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { AlbumOrderByWithRelationInput } from 'src/models/albums/graphql/dtos/order-by.args'

@InputType()
export class TrackOrderByWithRelationInputStrict implements RestrictProperties<
  TrackOrderByWithRelationInputStrict,
  Prisma.TrackOrderByWithRelationInput
> {
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  position: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  duration: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  albumId: Prisma.SortOrder

  Album: AlbumOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class TrackOrderByWithRelationInput extends PartialType(
  TrackOrderByWithRelationInputStrict,
) {}

@InputType()
export class TrackOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
