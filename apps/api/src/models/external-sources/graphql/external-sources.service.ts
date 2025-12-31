import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateExternalSourceInput } from './dtos/create-external-source.input'
import {
  FindManyExternalSourceArgs,
  FindUniqueExternalSourceArgs,
} from './dtos/find.args'
import { UpdateExternalSourceInput } from './dtos/update-external-source.input'

@Injectable()
export class ExternalSourcesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createExternalSourceInput: CreateExternalSourceInput) {
    return this.prisma.externalSource.create({
      data: createExternalSourceInput,
    })
  }

  findAll(args: FindManyExternalSourceArgs) {
    return this.prisma.externalSource.findMany(args)
  }

  findOne(args: FindUniqueExternalSourceArgs) {
    return this.prisma.externalSource.findUnique(args)
  }

  update(updateExternalSourceInput: UpdateExternalSourceInput) {
    const { id, ...data } = updateExternalSourceInput
    return this.prisma.externalSource.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueExternalSourceArgs) {
    return this.prisma.externalSource.delete(args)
  }
}
