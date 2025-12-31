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

registerEnumType($Enums.ExternalSourceType, {
  name: 'ExternalSourceType',
})

@InputType()
export class ExternalSourceWhereUniqueInput {
  id: number
}

@InputType()
export class ExternalSourceWhereInputStrict implements RestrictProperties<
  ExternalSourceWhereInputStrict,
  ExternalSourceWhereInput
> {
  id: IntFilter
  externalId: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  albumId: IntFilter

  @Field(() => $Enums.ExternalSourceType)
  source: $Enums.ExternalSourceType

  Album: AlbumRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ExternalSourceWhereInput[]
  OR: ExternalSourceWhereInput[]
  NOT: ExternalSourceWhereInput[]
}

@InputType()
export class ExternalSourceWhereInput extends PartialType(
  ExternalSourceWhereInputStrict,
) {}

@InputType()
export class ExternalSourceListRelationFilter {
  every?: ExternalSourceWhereInput
  some?: ExternalSourceWhereInput
  none?: ExternalSourceWhereInput
}

@InputType()
export class ExternalSourceRelationFilter {
  is?: ExternalSourceWhereInput
  isNot?: ExternalSourceWhereInput
}
