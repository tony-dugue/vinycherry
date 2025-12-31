import { ArgsType, Field, PartialType, registerEnumType } from '@nestjs/graphql'
import { DefaultArgs } from '@prisma/client/runtime/client'
import { Prisma } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { AlbumOrderByWithRelationInput } from './order-by.args'
import { AlbumWhereInput, AlbumWhereUniqueInput } from './where.args'

registerEnumType(Prisma.AlbumScalarFieldEnum, {
  name: 'AlbumScalarFieldEnum',
})

@ArgsType()
class FindManyAlbumArgsStrict implements RestrictProperties<
  FindManyAlbumArgsStrict,
  Omit<Prisma.AlbumFindManyArgs, 'include' | 'select'>
> {
  @Field(() => [String], { nullable: true })
  omit: Prisma.AlbumOmit<DefaultArgs>
  where: AlbumWhereInput
  orderBy: AlbumOrderByWithRelationInput[]
  cursor: AlbumWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.AlbumScalarFieldEnum])
  distinct: Prisma.AlbumScalarFieldEnum[]
}

@ArgsType()
export class FindManyAlbumArgs extends PartialType(FindManyAlbumArgsStrict) {}

@ArgsType()
export class FindUniqueAlbumArgs {
  @Field(() => AlbumWhereUniqueInput)
  where: AlbumWhereUniqueInput
}
