import { ArgsType, Field, PartialType, registerEnumType } from '@nestjs/graphql'

import { DefaultArgs } from '@prisma/client/runtime/client'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { MemberOrderByWithRelationInput } from './order-by.args'
import { MemberWhereInput, MemberWhereUniqueInput } from './where.args'

registerEnumType(Prisma.MemberScalarFieldEnum, {
  name: 'MemberScalarFieldEnum',
})

@ArgsType()
class FindManyMemberArgsStrict implements RestrictProperties<
  FindManyMemberArgsStrict,
  Omit<Prisma.MemberFindManyArgs, 'include' | 'select'>
> {
  @Field(() => [String], { nullable: true })
  omit: Prisma.MemberOmit<DefaultArgs>
  where: MemberWhereInput
  orderBy: MemberOrderByWithRelationInput[]
  cursor: MemberWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.MemberScalarFieldEnum])
  distinct: Prisma.MemberScalarFieldEnum[]
}

@ArgsType()
export class FindManyMemberArgs extends PartialType(FindManyMemberArgsStrict) {}

@ArgsType()
export class FindUniqueMemberArgs {
  @Field(() => MemberWhereUniqueInput)
  where: MemberWhereUniqueInput
}
