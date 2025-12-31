import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateGroupStyleInput } from './dtos/create-group-style.input'
import {
  FindManyGroupStyleArgs,
  FindUniqueGroupStyleArgs,
} from './dtos/find.args'
import { UpdateGroupStyleInput } from './dtos/update-group-style.input'

@Injectable()
export class GroupStylesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createGroupStyleInput: CreateGroupStyleInput) {
    return this.prisma.groupStyle.create({
      data: createGroupStyleInput,
    })
  }

  findAll(args: FindManyGroupStyleArgs) {
    return this.prisma.groupStyle.findMany(args)
  }

  findOne(args: FindUniqueGroupStyleArgs) {
    return this.prisma.groupStyle.findUnique({
      where: args.where,
    })
  }

  update(updateGroupStyleInput: UpdateGroupStyleInput) {
    const { groupId, styleId, ...data } = updateGroupStyleInput
    return this.prisma.groupStyle.update({
      where: {
        groupId_styleId: { groupId, styleId },
      },
      data,
    })
  }

  remove(args: FindUniqueGroupStyleArgs) {
    return this.prisma.groupStyle.delete({
      where: args.where,
    })
  }
}
