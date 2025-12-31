import { Field, InputType, Int, PartialType } from '@nestjs/graphql'
import { CreateGroupMusicianInstrumentInput } from './create-group-musician-instrument.input'

@InputType()
export class UpdateGroupMusicianInstrumentInput extends PartialType(
  CreateGroupMusicianInstrumentInput,
) {
  @Field(() => Int)
  groupMusicianId: number

  @Field(() => Int)
  instrumentId: number
}
