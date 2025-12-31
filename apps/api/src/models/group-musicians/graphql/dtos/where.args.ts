import { InputType, PartialType } from '@nestjs/graphql'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { GroupMusicianInstrumentListRelationFilter } from 'src/models/group-musician-instruments/graphql/dtos/where.args'
import { GroupRelationFilter } from 'src/models/groups/graphql/dtos/where.args'

@InputType()
export class GroupMusicianWhereUniqueInput {
  id: number
}

@InputType()
export class GroupMusicianWhereInputStrict implements RestrictProperties<
  GroupMusicianWhereInputStrict,
  GroupMusicianWhereInput
> {
  id: IntFilter
  name: StringFilter
  role: StringFilter
  startYear: IntFilter
  endYear: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  groupId: IntFilter
  Group: GroupRelationFilter
  Instruments: GroupMusicianInstrumentListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: GroupMusicianWhereInput[]
  OR: GroupMusicianWhereInput[]
  NOT: GroupMusicianWhereInput[]
}

@InputType()
export class GroupMusicianWhereInput extends PartialType(
  GroupMusicianWhereInputStrict,
) {}

@InputType()
export class GroupMusicianListRelationFilter {
  every?: GroupMusicianWhereInput
  some?: GroupMusicianWhereInput
  none?: GroupMusicianWhereInput
}

@InputType()
export class GroupMusicianRelationFilter {
  is?: GroupMusicianWhereInput
  isNot?: GroupMusicianWhereInput
}
