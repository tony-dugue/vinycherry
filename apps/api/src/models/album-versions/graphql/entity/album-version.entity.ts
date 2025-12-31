import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import {
  $Enums,
  AlbumVersion as AlbumVersionType,
} from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType($Enums.SupportType, {
  name: 'SupportType',
})

@ObjectType()
export class AlbumVersion implements RestrictProperties<
  AlbumVersion,
  AlbumVersionType
> {
  @Field(() => $Enums.SupportType)
  format: $Enums.SupportType
  name: string
  id: number

  @Field({ nullable: true })
  year: number
  createdAt: Date
  updatedAt: Date
  albumId: number

  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
