import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { $Enums, User as UserType } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType($Enums.AuthProviderType, {
  name: 'AuthProviderType',
})

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  uid: string
  @Field({ nullable: true })
  name: string | null
  @Field({ nullable: true })
  image: string | null

  createdAt: Date
  updatedAt: Date
}

// Todo Add below to make optional fields optional.
// @Field({ nullable: true })

@ObjectType()
export class AuthProvider {
  uid: string
  @Field(() => $Enums.AuthProviderType)
  type: $Enums.AuthProviderType
}
