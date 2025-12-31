import { ArgsType, Field, PartialType, registerEnumType } from '@nestjs/graphql'
import { DefaultArgs } from '@prisma/client/runtime/client'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ExternalSourceOrderByWithRelationInput } from './order-by.args'
import {
  ExternalSourceWhereInput,
  ExternalSourceWhereUniqueInput,
} from './where.args'

registerEnumType(Prisma.ExternalSourceScalarFieldEnum, {
  name: 'ExternalSourceScalarFieldEnum',
})

@ArgsType()
class FindManyExternalSourceArgsStrict implements RestrictProperties<
  FindManyExternalSourceArgsStrict,
  Omit<Prisma.ExternalSourceFindManyArgs, 'include' | 'select'>
> {
  @Field(() => [String], { nullable: true })
  omit: Prisma.ExternalSourceOmit<DefaultArgs>
  where: ExternalSourceWhereInput
  orderBy: ExternalSourceOrderByWithRelationInput[]
  cursor: ExternalSourceWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ExternalSourceScalarFieldEnum])
  distinct: Prisma.ExternalSourceScalarFieldEnum[]
}

@ArgsType()
export class FindManyExternalSourceArgs extends PartialType(
  FindManyExternalSourceArgsStrict,
) {}

@ArgsType()
export class FindUniqueExternalSourceArgs {
  @Field(() => ExternalSourceWhereUniqueInput)
  where: ExternalSourceWhereUniqueInput
}
