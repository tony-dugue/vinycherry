import { InputType, PartialType } from '@nestjs/graphql'
import { GroupMusician } from 'prisma/generated/prisma/client'
import { CreateGroupMusicianInput } from './create-group-musician.input'

@InputType()
export class UpdateGroupMusicianInput extends PartialType(
  CreateGroupMusicianInput,
) {
  id: GroupMusician['id']
}
