import { PartialType } from '@nestjs/swagger'
import { Member } from 'prisma/generated/prisma/client'
import { CreateMember } from './create.dto'

export class UpdateMember extends PartialType(CreateMember) {
  uid: Member['uid']
}
