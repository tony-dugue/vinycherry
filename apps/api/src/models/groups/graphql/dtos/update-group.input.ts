import { InputType, PartialType } from '@nestjs/graphql'
import { Group } from 'prisma/generated/prisma/client'
import { CreateGroupInput } from './create-group.input'

@InputType()
export class UpdateGroupInput extends PartialType(CreateGroupInput) {
  id: Group['id']
}
