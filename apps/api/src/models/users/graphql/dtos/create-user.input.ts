import { InputType, ObjectType, PickType } from '@nestjs/graphql'

@InputType()
export class RegisterWithCredentialsInput {
  name: string
  email: string
  password: string
  image?: string
}

@InputType()
export class LoginInput extends PickType(RegisterWithCredentialsInput, [
  'email',
  'password',
]) {}

@ObjectType()
export class LoginOutput {
  token: string
}
