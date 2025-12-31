import { Field, ObjectType } from '@nestjs/graphql'
import { Album as AlbumType } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Album implements RestrictProperties<Album, AlbumType> {
  id: number
  title: string
  @Field({ nullable: true })
  releaseDate: Date
  @Field({ nullable: true })
  studio: string
  @Field({ nullable: true })
  coverUrl: string
  createdAt: Date
  updatedAt: Date

  groupId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
