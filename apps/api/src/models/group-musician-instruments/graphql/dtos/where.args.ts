import { Field, InputType, PartialType } from '@nestjs/graphql'
import { IntFilter, RestrictProperties } from 'src/common/dtos/common.input'
import { GroupMusicianRelationFilter } from 'src/models/group-musicians/graphql/dtos/where.args'
import { InstrumentRelationFilter } from 'src/models/instruments/graphql/dtos/where.args'

/** Clé composite pour la table de jointure */
@InputType()
export class GroupMusicianInstrumentCompoundUniqueInput {
  @Field(() => Number)
  groupMusicianId: number

  @Field(() => Number)
  instrumentId: number
}

/** WhereUniqueInput pour les opérations update/delete/connect */
@InputType()
export class GroupMusicianInstrumentWhereUniqueInput {
  @Field(() => GroupMusicianInstrumentCompoundUniqueInput)
  groupMusicianId_instrumentId: GroupMusicianInstrumentCompoundUniqueInput
}

@InputType()
export class GroupMusicianInstrumentWhereInputStrict implements RestrictProperties<
  GroupMusicianInstrumentWhereInputStrict,
  GroupMusicianInstrumentWhereInput
> {
  groupMusicianId: IntFilter
  instrumentId: IntFilter

  GroupMusician: GroupMusicianRelationFilter
  Instrument: InstrumentRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: GroupMusicianInstrumentWhereInput[]
  OR: GroupMusicianInstrumentWhereInput[]
  NOT: GroupMusicianInstrumentWhereInput[]
}

@InputType()
export class GroupMusicianInstrumentWhereInput extends PartialType(
  GroupMusicianInstrumentWhereInputStrict,
) {}

@InputType()
export class GroupMusicianInstrumentListRelationFilter {
  every?: GroupMusicianInstrumentWhereInput
  some?: GroupMusicianInstrumentWhereInput
  none?: GroupMusicianInstrumentWhereInput
}

@InputType()
export class GroupMusicianInstrumentRelationFilter {
  is?: GroupMusicianInstrumentWhereInput
  isNot?: GroupMusicianInstrumentWhereInput
}
