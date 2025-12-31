import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { AlbumOrderByRelationAggregateInput } from 'src/models/albums/graphql/dtos/order-by.args'
import { GroupMusicianOrderByRelationAggregateInput } from 'src/models/group-musicians/graphql/dtos/order-by.args'
import { GroupStyleOrderByRelationAggregateInput } from 'src/models/group-styles/graphql/dtos/order-by.args'

@InputType()
export class GroupOrderByWithRelationInputStrict implements RestrictProperties<
  GroupOrderByWithRelationInputStrict,
  Prisma.GroupOrderByWithRelationInput
> {
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  description: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  image: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder

  Styles: GroupStyleOrderByRelationAggregateInput
  Albums: AlbumOrderByRelationAggregateInput
  Musicians: GroupMusicianOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class GroupOrderByWithRelationInput extends PartialType(
  GroupOrderByWithRelationInputStrict,
) {}

@InputType()
export class GroupOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
