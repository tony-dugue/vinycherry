import { GroupMusicianInstrument } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class GroupMusicianInstrumentEntity implements RestrictProperties<
  GroupMusicianInstrumentEntity,
  GroupMusicianInstrument
> {
  groupMusicianId: number
  instrumentId: number
}
