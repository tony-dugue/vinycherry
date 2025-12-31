import { ArgsType, Field, PartialType, registerEnumType } from '@nestjs/graphql'
import { DefaultArgs } from '@prisma/client/runtime/client'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { GroupStyleOrderByWithRelationInput } from './order-by.args'
import { GroupStyleWhereInput, GroupStyleWhereUniqueInput } from './where.args'

registerEnumType(Prisma.GroupStyleScalarFieldEnum, {
  name: 'GroupStyleScalarFieldEnum',
})

@ArgsType()
class FindManyGroupStyleArgsStrict implements RestrictProperties<
  FindManyGroupStyleArgsStrict,
  Omit<Prisma.GroupStyleFindManyArgs, 'include' | 'select'>
> {
  @Field(() => [String], { nullable: true })
  omit: Prisma.GroupStyleOmit<DefaultArgs>
  where: GroupStyleWhereInput
  orderBy: GroupStyleOrderByWithRelationInput[]
  cursor: GroupStyleWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.GroupStyleScalarFieldEnum])
  distinct: Prisma.GroupStyleScalarFieldEnum[]
}

@ArgsType()
export class FindManyGroupStyleArgs extends PartialType(
  FindManyGroupStyleArgsStrict,
) {}

@ArgsType()
export class FindUniqueGroupStyleArgs {
  where: GroupStyleWhereUniqueInput
}
