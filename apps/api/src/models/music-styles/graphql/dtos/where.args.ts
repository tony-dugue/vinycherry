import { InputType, PartialType } from '@nestjs/graphql'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { GroupStyleListRelationFilter } from 'src/models/group-styles/graphql/dtos/where.args'

@InputType()
export class MusicStyleWhereUniqueInput {
  id: number
}

@InputType()
export class MusicStyleWhereInputStrict implements RestrictProperties<
  MusicStyleWhereInputStrict,
  MusicStyleWhereInput
> {
  id: IntFilter
  name: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter

  Groups: GroupStyleListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: MusicStyleWhereInput[]
  OR: MusicStyleWhereInput[]
  NOT: MusicStyleWhereInput[]
}

@InputType()
export class MusicStyleWhereInput extends PartialType(
  MusicStyleWhereInputStrict,
) {}

@InputType()
export class MusicStyleListRelationFilter {
  every?: MusicStyleWhereInput
  some?: MusicStyleWhereInput
  none?: MusicStyleWhereInput
}

@InputType()
export class MusicStyleRelationFilter {
  is?: MusicStyleWhereInput
  isNot?: MusicStyleWhereInput
}
