import { PartialType } from '@nestjs/swagger'
import { Instrument } from 'prisma/generated/prisma/client'
import { CreateInstrument } from './create.dto'

export class UpdateInstrument extends PartialType(CreateInstrument) {
  id: Instrument['id']
}
