import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateGroupMusicianInstrumentInput } from './dtos/create-group-musician-instrument.input'
import {
  FindManyGroupMusicianInstrumentArgs,
  FindUniqueGroupMusicianInstrumentArgs,
} from './dtos/find.args'
import { UpdateGroupMusicianInstrumentInput } from './dtos/update-group-musician-instrument.input'

@Injectable()
export class GroupMusicianInstrumentsService {
  constructor(private readonly prisma: PrismaService) {}
  create(
    createGroupMusicianInstrumentInput: CreateGroupMusicianInstrumentInput,
  ) {
    return this.prisma.groupMusicianInstrument.create({
      data: createGroupMusicianInstrumentInput,
    })
  }

  findAll(args: FindManyGroupMusicianInstrumentArgs) {
    return this.prisma.groupMusicianInstrument.findMany(args)
  }

  findOne(args: FindUniqueGroupMusicianInstrumentArgs) {
    return this.prisma.groupMusicianInstrument.findUnique({ where: args.where })
  }

  update(
    updateGroupMusicianInstrumentInput: UpdateGroupMusicianInstrumentInput,
  ) {
    const { groupMusicianId, instrumentId, ...data } =
      updateGroupMusicianInstrumentInput
    return this.prisma.groupMusicianInstrument.update({
      where: {
        groupMusicianId_instrumentId: { groupMusicianId, instrumentId },
      },
      data,
    })
  }

  remove(args: FindUniqueGroupMusicianInstrumentArgs) {
    return this.prisma.groupMusicianInstrument.delete({
      where: args.where,
    })
  }
}
