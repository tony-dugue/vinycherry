import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Member } from 'prisma/generated/prisma/client'
import { CreateMemberInput } from './create-member.input'

@InputType()
export class UpdateMemberInput extends PartialType(CreateMemberInput) {
  @Field()
  uid: Member['uid']
}
