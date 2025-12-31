import { OmitType } from '@nestjs/swagger'
import { TrackEntity } from '../entity/track.entity'

export class CreateTrack extends OmitType(TrackEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
