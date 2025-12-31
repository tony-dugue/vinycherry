import { ArgsType, Field, PartialType, registerEnumType } from '@nestjs/graphql'
import { DefaultArgs } from '@prisma/client/runtime/client'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { InstrumentOrderByWithRelationInput } from './order-by.args'
import { InstrumentWhereInput, InstrumentWhereUniqueInput } from './where.args'

registerEnumType(Prisma.InstrumentScalarFieldEnum, {
  name: 'InstrumentScalarFieldEnum',
})

@ArgsType()
class FindManyInstrumentArgsStrict implements RestrictProperties<
  FindManyInstrumentArgsStrict,
  Omit<Prisma.InstrumentFindManyArgs, 'include' | 'select'>
> {
  @Field(() => [String], { nullable: true })
  omit: Prisma.InstrumentOmit<DefaultArgs>
  where: InstrumentWhereInput
  orderBy: InstrumentOrderByWithRelationInput[]
  cursor: InstrumentWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.InstrumentScalarFieldEnum])
  distinct: Prisma.InstrumentScalarFieldEnum[]
}

@ArgsType()
export class FindManyInstrumentArgs extends PartialType(
  FindManyInstrumentArgsStrict,
) {}

@ArgsType()
export class FindUniqueInstrumentArgs {
  @Field(() => InstrumentWhereUniqueInput)
  where: InstrumentWhereUniqueInput
}
