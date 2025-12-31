import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateTrackInput } from './dtos/create-track.input'
import { FindManyTrackArgs, FindUniqueTrackArgs } from './dtos/find.args'
import { UpdateTrackInput } from './dtos/update-track.input'

@Injectable()
export class TracksService {
  constructor(private readonly prisma: PrismaService) {}
  create(createTrackInput: CreateTrackInput) {
    return this.prisma.track.create({
      data: createTrackInput,
    })
  }

  findAll(args: FindManyTrackArgs) {
    return this.prisma.track.findMany(args)
  }

  findOne(args: FindUniqueTrackArgs) {
    return this.prisma.track.findUnique(args)
  }

  update(updateTrackInput: UpdateTrackInput) {
    const { id, ...data } = updateTrackInput
    return this.prisma.track.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueTrackArgs) {
    return this.prisma.track.delete(args)
  }
}
