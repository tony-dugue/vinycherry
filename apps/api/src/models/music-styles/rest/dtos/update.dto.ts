import { PartialType } from '@nestjs/swagger'
import { MusicStyle } from 'prisma/generated/prisma/client'
import { CreateMusicStyle } from './create.dto'

export class UpdateMusicStyle extends PartialType(CreateMusicStyle) {
  id: MusicStyle['id']
}
