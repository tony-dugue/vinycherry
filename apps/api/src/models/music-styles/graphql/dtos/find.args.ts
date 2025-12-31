import { ArgsType, Field, PartialType, registerEnumType } from '@nestjs/graphql'
import { DefaultArgs } from '@prisma/client/runtime/client'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { MusicStyleOrderByWithRelationInput } from './order-by.args'
import { MusicStyleWhereInput, MusicStyleWhereUniqueInput } from './where.args'

registerEnumType(Prisma.MusicStyleScalarFieldEnum, {
  name: 'MusicStyleScalarFieldEnum',
})

@ArgsType()
class FindManyMusicStyleArgsStrict implements RestrictProperties<
  FindManyMusicStyleArgsStrict,
  Omit<Prisma.MusicStyleFindManyArgs, 'include' | 'select'>
> {
  @Field(() => [String], { nullable: true })
  omit: Prisma.MusicStyleOmit<DefaultArgs>
  where: MusicStyleWhereInput
  orderBy: MusicStyleOrderByWithRelationInput[]
  cursor: MusicStyleWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.MusicStyleScalarFieldEnum])
  distinct: Prisma.MusicStyleScalarFieldEnum[]
}

@ArgsType()
export class FindManyMusicStyleArgs extends PartialType(
  FindManyMusicStyleArgsStrict,
) {}

@ArgsType()
export class FindUniqueMusicStyleArgs {
  @Field(() => MusicStyleWhereUniqueInput)
  where: MusicStyleWhereUniqueInput
}
