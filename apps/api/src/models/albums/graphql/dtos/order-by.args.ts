import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { AlbumVersionOrderByRelationAggregateInput } from 'src/models/album-versions/graphql/dtos/order-by.args'
import { ExternalSourceOrderByRelationAggregateInput } from 'src/models/external-sources/graphql/dtos/order-by.args'
import { GroupOrderByWithRelationInput } from 'src/models/groups/graphql/dtos/order-by.args'
import { TrackOrderByRelationAggregateInput } from 'src/models/tracks/graphql/dtos/order-by.args'

@InputType()
export class AlbumOrderByWithRelationInputStrict implements RestrictProperties<
  AlbumOrderByWithRelationInputStrict,
  Prisma.AlbumOrderByWithRelationInput
> {
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  releaseDate: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  studio: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  coverUrl: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  groupId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder

  Group: GroupOrderByWithRelationInput
  Tracks: TrackOrderByRelationAggregateInput
  Versions: AlbumVersionOrderByRelationAggregateInput
  Sources: ExternalSourceOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class AlbumOrderByWithRelationInput extends PartialType(
  AlbumOrderByWithRelationInputStrict,
) {}

@InputType()
export class AlbumOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
