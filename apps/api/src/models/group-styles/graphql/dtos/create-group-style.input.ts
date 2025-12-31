import { InputType, PickType } from '@nestjs/graphql'
import { GroupStyle } from '../entity/group-style.entity'

@InputType()
export class CreateGroupStyleInput extends PickType(
  GroupStyle,
  ['groupId', 'styleId'],
  InputType,
) {}
