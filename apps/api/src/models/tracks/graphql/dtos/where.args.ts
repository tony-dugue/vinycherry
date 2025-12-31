import { InputType, PartialType } from '@nestjs/graphql'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AlbumRelationFilter } from 'src/models/albums/graphql/dtos/where.args'

@InputType()
export class TrackWhereUniqueInput {
  id: number
}

@InputType()
export class TrackWhereInputStrict implements RestrictProperties<
  TrackWhereInputStrict,
  TrackWhereInput
> {
  id: IntFilter
  title: StringFilter
  position: IntFilter
  duration: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  albumId: IntFilter

  Album: AlbumRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: TrackWhereInput[]
  OR: TrackWhereInput[]
  NOT: TrackWhereInput[]
}

@InputType()
export class TrackWhereInput extends PartialType(TrackWhereInputStrict) {}

@InputType()
export class TrackListRelationFilter {
  every?: TrackWhereInput
  some?: TrackWhereInput
  none?: TrackWhereInput
}

@InputType()
export class TrackRelationFilter {
  is?: TrackWhereInput
  isNot?: TrackWhereInput
}
