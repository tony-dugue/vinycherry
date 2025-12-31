import { OmitType } from '@nestjs/swagger'
import { GroupMusicianInstrumentEntity } from '../entity/group-musician-instrument.entity'

export class CreateGroupMusicianInstrument extends OmitType(
  GroupMusicianInstrumentEntity,
  [],
) {}
