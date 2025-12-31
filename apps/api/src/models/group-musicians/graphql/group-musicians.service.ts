import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateGroupMusicianInput } from './dtos/create-group-musician.input'
import {
  FindManyGroupMusicianArgs,
  FindUniqueGroupMusicianArgs,
} from './dtos/find.args'
import { UpdateGroupMusicianInput } from './dtos/update-group-musician.input'

@Injectable()
export class GroupMusiciansService {
  constructor(private readonly prisma: PrismaService) {}
  create(createGroupMusicianInput: CreateGroupMusicianInput) {
    return this.prisma.groupMusician.create({
      data: createGroupMusicianInput,
    })
  }

  findAll(args: FindManyGroupMusicianArgs) {
    return this.prisma.groupMusician.findMany(args)
  }

  findOne(args: FindUniqueGroupMusicianArgs) {
    return this.prisma.groupMusician.findUnique(args)
  }

  update(updateGroupMusicianInput: UpdateGroupMusicianInput) {
    const { id, ...data } = updateGroupMusicianInput
    return this.prisma.groupMusician.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueGroupMusicianArgs) {
    return this.prisma.groupMusician.delete(args)
  }
}
