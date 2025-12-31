import { Field, ObjectType } from '@nestjs/graphql'
import { Member as MemberType } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Member implements RestrictProperties<Member, MemberType> {
  uid: string
  @Field({ nullable: true })
  displayName: string
  createdAt: Date
  updatedAt: Date
}
