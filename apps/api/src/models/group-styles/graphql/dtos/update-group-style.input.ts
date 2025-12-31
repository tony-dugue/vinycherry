import { InputType, PartialType } from '@nestjs/graphql'
import { CreateGroupStyleInput } from './create-group-style.input'

@InputType()
export class UpdateGroupStyleInput extends PartialType(CreateGroupStyleInput) {
  groupId: number
  styleId: number
}
