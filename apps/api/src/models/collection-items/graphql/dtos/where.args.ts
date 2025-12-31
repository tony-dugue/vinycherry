import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'

import {
  Field,
  InputType,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql'
import { $Enums } from 'prisma/generated/prisma/client'
import { AlbumVersionRelationFilter } from 'src/models/album-versions/graphql/dtos/where.args'
import { MemberRelationFilter } from 'src/models/members/graphql/dtos/where.args'
import { PurchaseInfoRelationFilter } from 'src/models/purchase-infos/graphql/dtos/where.args'

registerEnumType($Enums.Condition, {
  name: 'Condition',
})

/**
 * WHERE UNIQUE
 */
@InputType()
export class CollectionItemWhereUniqueInput {
  id: number
}

/**
 * WHERE
 */
@InputType()
export class CollectionItemWhereInputStrict {
  id?: IntFilter
  memberId?: StringFilter
  albumVersionId?: IntFilter
  notes?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter

  /**
   * ENUM FILTER
   */
  @Field(() => $Enums.Condition, { nullable: true })
  condition?: $Enums.Condition

  /**
   * RELATIONS
   */
  Member?: MemberRelationFilter
  AlbumVersion?: AlbumVersionRelationFilter
  Purchase?: PurchaseInfoRelationFilter

  /**
   * LOGICAL OPERATORS
   */
  AND?: CollectionItemWhereInput[]
  OR?: CollectionItemWhereInput[]
  NOT?: CollectionItemWhereInput[]
}

@InputType()
export class CollectionItemWhereInput extends PartialType(
  CollectionItemWhereInputStrict,
) {}

/**
 * RELATION FILTERS
 */
@InputType()
export class CollectionItemListRelationFilter {
  every?: CollectionItemWhereInput
  some?: CollectionItemWhereInput
  none?: CollectionItemWhereInput
}

@InputType()
export class CollectionItemRelationFilter {
  is?: CollectionItemWhereInput
  isNot?: CollectionItemWhereInput
}
