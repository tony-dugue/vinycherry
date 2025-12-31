import { InputType, PickType } from '@nestjs/graphql'
import { GroupMusicianInstrument } from '../entity/group-musician-instrument.entity'

@InputType()
export class CreateGroupMusicianInstrumentInput extends PickType(
  GroupMusicianInstrument,
  ['groupMusicianId', 'instrumentId'],
  InputType,
) {}
