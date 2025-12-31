import {
  Field,
  InputType,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql'
import { $Enums } from 'prisma/generated/prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AlbumRelationFilter } from 'src/models/albums/graphql/dtos/where.args'
import { CollectionItemListRelationFilter } from 'src/models/collection-items/graphql/dtos/where.args'

registerEnumType($Enums.SupportType, {
  name: 'SupportType',
})

@InputType()
export class AlbumVersionWhereUniqueInput {
  id: number
}

@InputType()
export class AlbumVersionWhereInputStrict implements RestrictProperties<
  AlbumVersionWhereInputStrict,
  AlbumVersionWhereInput
> {
  id: IntFilter
  name: StringFilter
  year: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  albumId: IntFilter

  @Field(() => $Enums.SupportType, { nullable: true })
  format: $Enums.SupportType

  Album: AlbumRelationFilter
  CollectionItems: CollectionItemListRelationFilter

  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: AlbumVersionWhereInput[]
  OR: AlbumVersionWhereInput[]
  NOT: AlbumVersionWhereInput[]
}

@InputType()
export class AlbumVersionWhereInput extends PartialType(
  AlbumVersionWhereInputStrict,
) {}

@InputType()
export class AlbumVersionListRelationFilter {
  every?: AlbumVersionWhereInput
  some?: AlbumVersionWhereInput
  none?: AlbumVersionWhereInput
}

@InputType()
export class AlbumVersionRelationFilter {
  is?: AlbumVersionWhereInput
  isNot?: AlbumVersionWhereInput
}
