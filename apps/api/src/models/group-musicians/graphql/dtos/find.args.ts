import { ArgsType, Field, PartialType, registerEnumType } from '@nestjs/graphql'
import { DefaultArgs } from '@prisma/client/runtime/client'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { GroupMusicianOrderByWithRelationInput } from './order-by.args'
import {
  GroupMusicianWhereInput,
  GroupMusicianWhereUniqueInput,
} from './where.args'

registerEnumType(Prisma.GroupMusicianScalarFieldEnum, {
  name: 'GroupMusicianScalarFieldEnum',
})

@ArgsType()
class FindManyGroupMusicianArgsStrict implements RestrictProperties<
  FindManyGroupMusicianArgsStrict,
  Omit<Prisma.GroupMusicianFindManyArgs, 'include' | 'select'>
> {
  @Field(() => [String], { nullable: true })
  omit: Prisma.GroupMusicianOmit<DefaultArgs>
  where: GroupMusicianWhereInput
  orderBy: GroupMusicianOrderByWithRelationInput[]
  cursor: GroupMusicianWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.GroupMusicianScalarFieldEnum])
  distinct: Prisma.GroupMusicianScalarFieldEnum[]
}

@ArgsType()
export class FindManyGroupMusicianArgs extends PartialType(
  FindManyGroupMusicianArgsStrict,
) {}

@ArgsType()
export class FindUniqueGroupMusicianArgs {
  @Field(() => GroupMusicianWhereUniqueInput)
  where: GroupMusicianWhereUniqueInput
}
