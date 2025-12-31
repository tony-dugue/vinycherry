import { OmitType } from '@nestjs/swagger'
import { GroupMusicianEntity } from '../entity/group-musician.entity'

export class CreateGroupMusician extends OmitType(GroupMusicianEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
