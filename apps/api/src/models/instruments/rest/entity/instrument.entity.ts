import { Instrument } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class InstrumentEntity implements RestrictProperties<
  InstrumentEntity,
  Instrument
> {
  name: string
  id: number
  createdAt: Date
  updatedAt: Date
}
