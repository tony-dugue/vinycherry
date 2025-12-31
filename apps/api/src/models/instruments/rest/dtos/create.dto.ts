import { OmitType } from '@nestjs/swagger'
import { InstrumentEntity } from '../entity/instrument.entity'

export class CreateInstrument extends OmitType(InstrumentEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
