import { OmitType } from '@nestjs/swagger'
import { GroupEntity } from '../entity/group.entity'

export class CreateGroup extends OmitType(GroupEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
