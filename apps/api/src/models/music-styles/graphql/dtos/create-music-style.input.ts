import { InputType, OmitType } from '@nestjs/graphql'
import { MusicStyle } from '../entity/music-style.entity'

@InputType()
export class CreateMusicStyleInput extends OmitType(
  MusicStyle,
  ['id', 'createdAt', 'updatedAt'],
  InputType,
) {}
