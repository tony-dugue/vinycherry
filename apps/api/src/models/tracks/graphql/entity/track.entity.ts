import { Field, ObjectType } from '@nestjs/graphql'
import { Track as TrackType } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Track implements RestrictProperties<Track, TrackType> {
  id: number
  title: string
  position: number
  @Field({ nullable: true })
  duration: number
  createdAt: Date
  updatedAt: Date
  albumId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
