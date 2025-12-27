import { User } from '@prisma/client'
import { RestrictProperties } from '../../../../common/dtos/common.input'

export class UserEntity implements RestrictProperties<UserEntity, User> {
  name: string | null
  uid: string
  createdAt: Date
  updatedAt: Date
}
