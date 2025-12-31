import { ArgsType, Field, PartialType, registerEnumType } from '@nestjs/graphql'
import { DefaultArgs } from '@prisma/client/runtime/client'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { GroupOrderByWithRelationInput } from './order-by.args'
import { GroupWhereInput, GroupWhereUniqueInput } from './where.args'

registerEnumType(Prisma.GroupScalarFieldEnum, {
  name: 'GroupScalarFieldEnum',
})

@ArgsType()
class FindManyGroupArgsStrict implements RestrictProperties<
  FindManyGroupArgsStrict,
  Omit<Prisma.GroupFindManyArgs, 'include' | 'select'>
> {
  @Field(() => [String], { nullable: true })
  omit: Prisma.GroupOmit<DefaultArgs>
  where: GroupWhereInput
  orderBy: GroupOrderByWithRelationInput[]
  cursor: GroupWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.GroupScalarFieldEnum])
  distinct: Prisma.GroupScalarFieldEnum[]
}

@ArgsType()
export class FindManyGroupArgs extends PartialType(FindManyGroupArgsStrict) {}

@ArgsType()
export class FindUniqueGroupArgs {
  @Field(() => GroupWhereUniqueInput)
  where: GroupWhereUniqueInput
}
