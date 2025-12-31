import { InputType, PartialType } from '@nestjs/graphql'
import { MusicStyle } from 'prisma/generated/prisma/client'
import { CreateMusicStyleInput } from './create-music-style.input'

@InputType()
export class UpdateMusicStyleInput extends PartialType(CreateMusicStyleInput) {
  id: MusicStyle['id']
}
