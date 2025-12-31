import { PartialType } from '@nestjs/swagger'
import { Track } from 'prisma/generated/prisma/client'
import { CreateTrack } from './create.dto'

export class UpdateTrack extends PartialType(CreateTrack) {
  id: Track['id']
}
