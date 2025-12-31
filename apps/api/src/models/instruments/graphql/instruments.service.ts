import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateInstrumentInput } from './dtos/create-instrument.input'
import {
  FindManyInstrumentArgs,
  FindUniqueInstrumentArgs,
} from './dtos/find.args'
import { UpdateInstrumentInput } from './dtos/update-instrument.input'

@Injectable()
export class InstrumentsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createInstrumentInput: CreateInstrumentInput) {
    return this.prisma.instrument.create({
      data: createInstrumentInput,
    })
  }

  findAll(args: FindManyInstrumentArgs) {
    return this.prisma.instrument.findMany(args)
  }

  findOne(args: FindUniqueInstrumentArgs) {
    return this.prisma.instrument.findUnique(args)
  }

  update(updateInstrumentInput: UpdateInstrumentInput) {
    const { id, ...data } = updateInstrumentInput
    return this.prisma.instrument.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueInstrumentArgs) {
    return this.prisma.instrument.delete(args)
  }
}
