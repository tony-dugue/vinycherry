import { InputType, OmitType } from '@nestjs/graphql'
import { Track } from '../entity/track.entity'

@InputType()
export class CreateTrackInput extends OmitType(
  Track,
  ['id', 'createdAt', 'updatedAt'],
  InputType,
) {}
