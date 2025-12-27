import { ObjectType } from '@nestjs/graphql'
import { User as UserType } from '../../../../../prisma/generated/prisma/client'
import { RestrictProperties } from '../../../../common/dtos/common.input'

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  name: string | null
  uid: string
  image: string | null
  createdAt: Date
  updatedAt: Date
}
