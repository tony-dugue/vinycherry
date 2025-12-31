import { InputType, OmitType } from '@nestjs/graphql'
import { GroupMusician } from '../entity/group-musician.entity'

@InputType()
export class CreateGroupMusicianInput extends OmitType(
  GroupMusician,
  ['id', 'createdAt', 'updatedAt'],
  InputType,
) {}
