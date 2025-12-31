import { InputType, OmitType } from '@nestjs/graphql'
import { Group } from '../entity/group.entity'

@InputType()
export class CreateGroupInput extends OmitType(
  Group,
  ['id', 'createdAt', 'updatedAt'],
  InputType,
) {}
