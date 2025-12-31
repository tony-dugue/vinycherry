import { ObjectType } from '@nestjs/graphql'
import { GroupMusicianInstrument as GroupMusicianInstrumentType } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class GroupMusicianInstrument implements RestrictProperties<
  GroupMusicianInstrument,
  GroupMusicianInstrumentType
> {
  groupMusicianId: number
  instrumentId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
