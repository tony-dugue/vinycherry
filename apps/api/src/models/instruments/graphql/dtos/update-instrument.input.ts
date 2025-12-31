import { InputType, PartialType } from '@nestjs/graphql'
import { Instrument } from 'prisma/generated/prisma/client'
import { CreateInstrumentInput } from './create-instrument.input'

@InputType()
export class UpdateInstrumentInput extends PartialType(CreateInstrumentInput) {
  id: Instrument['id']
}
