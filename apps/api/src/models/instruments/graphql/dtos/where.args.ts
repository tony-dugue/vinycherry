import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'

import { InputType, PartialType } from '@nestjs/graphql'
import { GroupMusicianInstrumentListRelationFilter } from 'src/models/group-musician-instruments/graphql/dtos/where.args'

@InputType()
export class InstrumentWhereUniqueInput {
  id: number
}

@InputType()
export class InstrumentWhereInputStrict implements RestrictProperties<
  InstrumentWhereInputStrict,
  InstrumentWhereInput
> {
  id: IntFilter
  name: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  Musicians: GroupMusicianInstrumentListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: InstrumentWhereInput[]
  OR: InstrumentWhereInput[]
  NOT: InstrumentWhereInput[]
}

@InputType()
export class InstrumentWhereInput extends PartialType(
  InstrumentWhereInputStrict,
) {}

@InputType()
export class InstrumentListRelationFilter {
  every?: InstrumentWhereInput
  some?: InstrumentWhereInput
  none?: InstrumentWhereInput
}

@InputType()
export class InstrumentRelationFilter {
  is?: InstrumentWhereInput
  isNot?: InstrumentWhereInput
}
