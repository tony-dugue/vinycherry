import { ObjectType } from '@nestjs/graphql'
import { Instrument as InstrumentType } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Instrument implements RestrictProperties<
  Instrument,
  InstrumentType
> {
  name: string
  id: number

  createdAt: Date
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
