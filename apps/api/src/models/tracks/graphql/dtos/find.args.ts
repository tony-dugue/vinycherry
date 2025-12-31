import { ArgsType, Field, PartialType, registerEnumType } from '@nestjs/graphql'
import { DefaultArgs } from '@prisma/client/runtime/client'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { TrackOrderByWithRelationInput } from './order-by.args'
import { TrackWhereInput, TrackWhereUniqueInput } from './where.args'

registerEnumType(Prisma.TrackScalarFieldEnum, {
  name: 'TrackScalarFieldEnum',
})

@ArgsType()
class FindManyTrackArgsStrict implements RestrictProperties<
  FindManyTrackArgsStrict,
  Omit<Prisma.TrackFindManyArgs, 'include' | 'select'>
> {
  @Field(() => [String], { nullable: true })
  omit: Prisma.TrackOmit<DefaultArgs>
  where: TrackWhereInput
  orderBy: TrackOrderByWithRelationInput[]
  cursor: TrackWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.TrackScalarFieldEnum])
  distinct: Prisma.TrackScalarFieldEnum[]
}

@ArgsType()
export class FindManyTrackArgs extends PartialType(FindManyTrackArgsStrict) {}

@ArgsType()
export class FindUniqueTrackArgs {
  @Field(() => TrackWhereUniqueInput)
  where: TrackWhereUniqueInput
}
