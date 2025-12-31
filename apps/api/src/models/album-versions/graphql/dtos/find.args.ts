import { ArgsType, Field, PartialType, registerEnumType } from '@nestjs/graphql'
import { DefaultArgs } from '@prisma/client/runtime/client'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { AlbumVersionOrderByWithRelationInput } from './order-by.args'
import {
  AlbumVersionWhereInput,
  AlbumVersionWhereUniqueInput,
} from './where.args'

registerEnumType(Prisma.AlbumVersionScalarFieldEnum, {
  name: 'AlbumVersionScalarFieldEnum',
})

@ArgsType()
class FindManyAlbumVersionArgsStrict implements RestrictProperties<
  FindManyAlbumVersionArgsStrict,
  Omit<Prisma.AlbumVersionFindManyArgs, 'include' | 'select'>
> {
  @Field(() => [String], { nullable: true })
  omit: Prisma.AlbumVersionOmit<DefaultArgs>
  where: AlbumVersionWhereInput
  orderBy: AlbumVersionOrderByWithRelationInput[]
  cursor: AlbumVersionWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.AlbumVersionScalarFieldEnum])
  distinct: Prisma.AlbumVersionScalarFieldEnum[]
}

@ArgsType()
export class FindManyAlbumVersionArgs extends PartialType(
  FindManyAlbumVersionArgsStrict,
) {}

@ArgsType()
export class FindUniqueAlbumVersionArgs {
  @Field(() => AlbumVersionWhereUniqueInput)
  where: AlbumVersionWhereUniqueInput
}
