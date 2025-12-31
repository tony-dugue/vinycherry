import { OmitType } from '@nestjs/swagger'
import { MemberEntity } from '../entity/member.entity'

export class CreateMember extends OmitType(MemberEntity, [
  'createdAt',
  'updatedAt',
]) {}
