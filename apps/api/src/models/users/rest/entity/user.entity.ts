import { User } from '../../../../../prisma/generated/prisma/client'
import { RestrictProperties } from '../../../../common/dtos/common.input'

export class UserEntity implements RestrictProperties<UserEntity, User> {
  name: string | null
  uid: string
  image: string | null
  createdAt: Date
  updatedAt: Date
}
