import { OmitType } from '@nestjs/swagger'
import { MusicStyleEntity } from '../entity/music-style.entity'

export class CreateMusicStyle extends OmitType(MusicStyleEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
