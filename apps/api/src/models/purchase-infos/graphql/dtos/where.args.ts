import { InputType, PartialType } from '@nestjs/graphql'
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { CollectionItemRelationFilter } from 'src/models/collection-items/graphql/dtos/where.args'

@InputType()
export class PurchaseInfoWhereUniqueInput {
  id: number
}

@InputType()
export class PurchaseInfoWhereInputStrict implements RestrictProperties<
  PurchaseInfoWhereInputStrict,
  PurchaseInfoWhereInput
> {
  id: IntFilter
  price: FloatFilter
  place: StringFilter
  date: DateTimeFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  collectionItemId: IntFilter

  CollectionItem: CollectionItemRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: PurchaseInfoWhereInput[]
  OR: PurchaseInfoWhereInput[]
  NOT: PurchaseInfoWhereInput[]
}

@InputType()
export class PurchaseInfoWhereInput extends PartialType(
  PurchaseInfoWhereInputStrict,
) {}

@InputType()
export class PurchaseInfoListRelationFilter {
  every?: PurchaseInfoWhereInput
  some?: PurchaseInfoWhereInput
  none?: PurchaseInfoWhereInput
}

@InputType()
export class PurchaseInfoRelationFilter {
  is?: PurchaseInfoWhereInput
  isNot?: PurchaseInfoWhereInput
}
