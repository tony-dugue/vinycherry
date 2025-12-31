import { ArgsType, Field, PartialType, registerEnumType } from '@nestjs/graphql'
import { DefaultArgs } from '@prisma/client/runtime/client'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { PurchaseInfoOrderByWithRelationInput } from './order-by.args'
import {
  PurchaseInfoWhereInput,
  PurchaseInfoWhereUniqueInput,
} from './where.args'

registerEnumType(Prisma.PurchaseInfoScalarFieldEnum, {
  name: 'PurchaseInfoScalarFieldEnum',
})

@ArgsType()
class FindManyPurchaseInfoArgsStrict implements RestrictProperties<
  FindManyPurchaseInfoArgsStrict,
  Omit<Prisma.PurchaseInfoFindManyArgs, 'include' | 'select'>
> {
  @Field(() => [String], { nullable: true })
  omit: Prisma.PurchaseInfoOmit<DefaultArgs>
  where: PurchaseInfoWhereInput
  orderBy: PurchaseInfoOrderByWithRelationInput[]
  cursor: PurchaseInfoWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.PurchaseInfoScalarFieldEnum])
  distinct: Prisma.PurchaseInfoScalarFieldEnum[]
}

@ArgsType()
export class FindManyPurchaseInfoArgs extends PartialType(
  FindManyPurchaseInfoArgsStrict,
) {}

@ArgsType()
export class FindUniquePurchaseInfoArgs {
  @Field(() => PurchaseInfoWhereUniqueInput)
  where: PurchaseInfoWhereUniqueInput
}
