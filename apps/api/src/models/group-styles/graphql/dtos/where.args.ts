import { Field, InputType, PartialType } from '@nestjs/graphql'
import { IntFilter, RestrictProperties } from 'src/common/dtos/common.input'
import { GroupRelationFilter } from 'src/models/groups/graphql/dtos/where.args'
import { MusicStyleRelationFilter } from 'src/models/music-styles/graphql/dtos/where.args'

/** Clé composite pour la table de jointure */
@InputType()
export class GroupStyleGroupIdStyleIdCompoundUniqueInput {
  @Field(() => Number)
  groupId: number
  @Field(() => Number)
  styleId: number
}

/** WhereUniqueInput pour les opérations update/delete/connect */
@InputType()
export class GroupStyleWhereUniqueInput {
  @Field(() => GroupStyleGroupIdStyleIdCompoundUniqueInput)
  groupId_styleId: GroupStyleGroupIdStyleIdCompoundUniqueInput
}

@InputType()
export class GroupStyleWhereInputStrict implements RestrictProperties<
  GroupStyleWhereInputStrict,
  GroupStyleWhereInput
> {
  groupId: IntFilter
  styleId: IntFilter

  Group: GroupRelationFilter
  MusicStyle: MusicStyleRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: GroupStyleWhereInput[]
  OR: GroupStyleWhereInput[]
  NOT: GroupStyleWhereInput[]
}

@InputType()
export class GroupStyleWhereInput extends PartialType(
  GroupStyleWhereInputStrict,
) {}

@InputType()
export class GroupStyleListRelationFilter {
  every?: GroupStyleWhereInput
  some?: GroupStyleWhereInput
  none?: GroupStyleWhereInput
}

@InputType()
export class GroupStyleRelationFilter {
  is?: GroupStyleWhereInput
  isNot?: GroupStyleWhereInput
}
