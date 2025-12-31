import { InputType, OmitType } from '@nestjs/graphql'
import { Instrument } from '../entity/instrument.entity'

@InputType()
export class CreateInstrumentInput extends OmitType(
  Instrument,
  ['id', 'createdAt', 'updatedAt'],
  InputType,
) {}
