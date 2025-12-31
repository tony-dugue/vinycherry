import { IsOptional } from 'class-validator'
import { User } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class UserEntity implements RestrictProperties<UserEntity, User> {
  @IsOptional()
  name: string
  uid: string
  @IsOptional()
  image: string
  createdAt: Date
  updatedAt: Date
}
