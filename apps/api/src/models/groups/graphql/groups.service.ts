import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateGroupInput } from './dtos/create-group.input'
import { FindManyGroupArgs, FindUniqueGroupArgs } from './dtos/find.args'
import { UpdateGroupInput } from './dtos/update-group.input'

@Injectable()
export class GroupsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createGroupInput: CreateGroupInput) {
    return this.prisma.group.create({
      data: createGroupInput,
    })
  }

  findAll(args: FindManyGroupArgs) {
    return this.prisma.group.findMany(args)
  }

  findOne(args: FindUniqueGroupArgs) {
    return this.prisma.group.findUnique(args)
  }

  update(updateGroupInput: UpdateGroupInput) {
    const { id, ...data } = updateGroupInput
    return this.prisma.group.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueGroupArgs) {
    return this.prisma.group.delete(args)
  }
}
