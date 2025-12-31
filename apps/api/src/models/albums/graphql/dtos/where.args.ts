import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'

import { InputType, PartialType } from '@nestjs/graphql'
import { AlbumVersionListRelationFilter } from 'src/models/album-versions/graphql/dtos/where.args'
import { ExternalSourceListRelationFilter } from 'src/models/external-sources/graphql/dtos/where.args'
import { GroupRelationFilter } from 'src/models/groups/graphql/dtos/where.args'
import { TrackListRelationFilter } from 'src/models/tracks/graphql/dtos/where.args'

@InputType()
export class AlbumWhereUniqueInput {
  id: number
}

@InputType()
export class AlbumWhereInputStrict implements RestrictProperties<
  AlbumWhereInputStrict,
  AlbumWhereInput
> {
  id: IntFilter
  title: StringFilter
  releaseDate: DateTimeFilter
  studio: DateTimeFilter
  coverUrl: DateTimeFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  groupId: IntFilter

  Group: GroupRelationFilter
  Tracks: TrackListRelationFilter
  Versions: AlbumVersionListRelationFilter
  Sources: ExternalSourceListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: AlbumWhereInput[]
  OR: AlbumWhereInput[]
  NOT: AlbumWhereInput[]
}

@InputType()
export class AlbumWhereInput extends PartialType(AlbumWhereInputStrict) {}

@InputType()
export class AlbumListRelationFilter {
  every?: AlbumWhereInput
  some?: AlbumWhereInput
  none?: AlbumWhereInput
}

@InputType()
export class AlbumRelationFilter {
  is?: AlbumWhereInput
  isNot?: AlbumWhereInput
}
