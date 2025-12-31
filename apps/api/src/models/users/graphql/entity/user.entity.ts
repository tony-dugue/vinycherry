import { Field, ObjectType } from '@nestjs/graphql'
import { $Enums, User as UserType } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  @Field({ nullable: true })
  name: string
  uid: string
  @Field({ nullable: true })
  image: string
  createdAt: Date
  updatedAt: Date
}

@ObjectType()
export class AuthProvider {
  uid: string
  @Field(() => $Enums.AuthProviderType)
  type: $Enums.AuthProviderType
}
