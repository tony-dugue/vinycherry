import { InputType, PartialType } from '@nestjs/graphql'
import { Track } from 'prisma/generated/prisma/client'
import { CreateTrackInput } from './create-track.input'

@InputType()
export class UpdateTrackInput extends PartialType(CreateTrackInput) {
  id: Track['id']
}
