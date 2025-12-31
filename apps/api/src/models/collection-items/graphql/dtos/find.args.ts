import { ArgsType, Field, PartialType, registerEnumType } from '@nestjs/graphql'
import { DefaultArgs } from '@prisma/client/runtime/client'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CollectionItemOrderByWithRelationInput } from './order-by.args'
import {
  CollectionItemWhereInput,
  CollectionItemWhereUniqueInput,
} from './where.args'

registerEnumType(Prisma.CollectionItemScalarFieldEnum, {
  name: 'CollectionItemScalarFieldEnum',
})

@ArgsType()
class FindManyCollectionItemArgsStrict implements RestrictProperties<
  FindManyCollectionItemArgsStrict,
  Omit<Prisma.CollectionItemFindManyArgs, 'include' | 'select'>
> {
  @Field(() => [String], { nullable: true })
  omit: Prisma.CollectionItemOmit<DefaultArgs>
  where: CollectionItemWhereInput
  orderBy: CollectionItemOrderByWithRelationInput[]
  cursor: CollectionItemWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.CollectionItemScalarFieldEnum])
  distinct: Prisma.CollectionItemScalarFieldEnum[]
}

@ArgsType()
export class FindManyCollectionItemArgs extends PartialType(
  FindManyCollectionItemArgsStrict,
) {}

@ArgsType()
export class FindUniqueCollectionItemArgs {
  @Field(() => CollectionItemWhereUniqueInput)
  where: CollectionItemWhereUniqueInput
}
