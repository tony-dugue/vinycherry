import { Field, ObjectType } from '@nestjs/graphql'
import { GroupMusician as GroupMusicianType } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class GroupMusician implements RestrictProperties<
  GroupMusician,
  GroupMusicianType
> {
  name: string
  id: number
  role: string
  @Field({ nullable: true })
  startYear: number
  @Field({ nullable: true })
  endYear: number
  createdAt: Date
  updatedAt: Date
  groupId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
