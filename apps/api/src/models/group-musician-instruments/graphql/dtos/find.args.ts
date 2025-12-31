import { ArgsType, Field, PartialType, registerEnumType } from '@nestjs/graphql'
import { DefaultArgs } from '@prisma/client/runtime/client'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { GroupMusicianInstrumentOrderByWithRelationInput } from './order-by.args'
import {
  GroupMusicianInstrumentWhereInput,
  GroupMusicianInstrumentWhereUniqueInput,
} from './where.args'

registerEnumType(Prisma.GroupMusicianInstrumentScalarFieldEnum, {
  name: 'GroupMusicianInstrumentScalarFieldEnum',
})

@ArgsType()
class FindManyGroupMusicianInstrumentArgsStrict implements RestrictProperties<
  FindManyGroupMusicianInstrumentArgsStrict,
  Omit<Prisma.GroupMusicianInstrumentFindManyArgs, 'include' | 'select'>
> {
  @Field(() => [String], { nullable: true })
  omit: Prisma.GroupMusicianInstrumentOmit<DefaultArgs>
  where: GroupMusicianInstrumentWhereInput
  orderBy: GroupMusicianInstrumentOrderByWithRelationInput[]
  cursor: GroupMusicianInstrumentWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.GroupMusicianInstrumentScalarFieldEnum])
  distinct: Prisma.GroupMusicianInstrumentScalarFieldEnum[]
}

@ArgsType()
export class FindManyGroupMusicianInstrumentArgs extends PartialType(
  FindManyGroupMusicianInstrumentArgsStrict,
) {}

@ArgsType()
export class FindUniqueGroupMusicianInstrumentArgs {
  where: GroupMusicianInstrumentWhereUniqueInput
}
