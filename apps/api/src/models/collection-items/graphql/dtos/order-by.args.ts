import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

import { AlbumVersionOrderByWithRelationInput } from 'src/models/album-versions/graphql/dtos/order-by.args'
import { MemberOrderByWithRelationInput } from 'src/models/members/graphql/dtos/order-by.args'
import { PurchaseInfoOrderByWithRelationInput } from 'src/models/purchase-infos/graphql/dtos/order-by.args'

@InputType()
export class CollectionItemOrderByWithRelationInputStrict implements RestrictProperties<
  CollectionItemOrderByWithRelationInputStrict,
  Prisma.CollectionItemOrderByWithRelationInput
> {
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  memberId: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  albumVersionId: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  condition: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  notes: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder

  // Relations
  @Field(() => MemberOrderByWithRelationInput, { nullable: true })
  Member: MemberOrderByWithRelationInput

  @Field(() => AlbumVersionOrderByWithRelationInput, { nullable: true })
  AlbumVersion: AlbumVersionOrderByWithRelationInput

  @Field(() => PurchaseInfoOrderByWithRelationInput, { nullable: true })
  Purchase: PurchaseInfoOrderByWithRelationInput
}

@InputType()
export class CollectionItemOrderByWithRelationInput extends PartialType(
  CollectionItemOrderByWithRelationInputStrict,
) {}

@InputType()
export class CollectionItemOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count?: Prisma.SortOrder
}
