import { Field, ObjectType } from '@nestjs/graphql'
import { Group as GroupType } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Group implements RestrictProperties<Group, GroupType> {
  name: string
  id: number
  @Field({ nullable: true })
  description: string
  @Field({ nullable: true })
  image: string
  createdAt: Date
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
