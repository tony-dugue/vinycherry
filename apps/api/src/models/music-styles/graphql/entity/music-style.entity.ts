import { ObjectType } from '@nestjs/graphql'
import { MusicStyle as MusicStyleType } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class MusicStyle implements RestrictProperties<
  MusicStyle,
  MusicStyleType
> {
  name: string
  id: number
  createdAt: Date
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
