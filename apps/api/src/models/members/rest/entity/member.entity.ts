import { IsOptional } from 'class-validator'
import { Member } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class MemberEntity implements RestrictProperties<MemberEntity, Member> {
  uid: string
  @IsOptional()
  displayName: string
  createdAt: Date
  updatedAt: Date
}
