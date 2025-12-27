import { InputType } from '@nestjs/graphql'

@InputType()
export class RegisterWithCredentialsInput {
  name: string
  email: string
  password: string
  image?: string
}
