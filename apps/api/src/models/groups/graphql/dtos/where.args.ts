import { InputType, PartialType } from '@nestjs/graphql'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AlbumListRelationFilter } from 'src/models/albums/graphql/dtos/where.args'
import { GroupMusicianListRelationFilter } from 'src/models/group-musicians/graphql/dtos/where.args'
import { GroupStyleListRelationFilter } from 'src/models/group-styles/graphql/dtos/where.args'

@InputType()
export class GroupWhereUniqueInput {
  id: number
}

@InputType()
export class GroupWhereInputStrict implements RestrictProperties<
  GroupWhereInputStrict,
  GroupWhereInput
> {
  id: IntFilter
  name: StringFilter
  description: StringFilter
  image: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter

  Styles: GroupStyleListRelationFilter
  Albums: AlbumListRelationFilter
  Musicians: GroupMusicianListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: GroupWhereInput[]
  OR: GroupWhereInput[]
  NOT: GroupWhereInput[]
}

@InputType()
export class GroupWhereInput extends PartialType(GroupWhereInputStrict) {}

@InputType()
export class GroupListRelationFilter {
  every?: GroupWhereInput
  some?: GroupWhereInput
  none?: GroupWhereInput
}

@InputType()
export class GroupRelationFilter {
  is?: GroupWhereInput
  isNot?: GroupWhereInput
}
