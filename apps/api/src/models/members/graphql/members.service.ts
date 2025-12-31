import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateMemberInput } from './dtos/create-member.input'
import { FindManyMemberArgs, FindUniqueMemberArgs } from './dtos/find.args'
import { UpdateMemberInput } from './dtos/update-member.input'

@Injectable()
export class MembersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createMemberInput: CreateMemberInput) {
    return this.prisma.member.create({
      data: createMemberInput,
    })
  }

  findAll(args: FindManyMemberArgs) {
    return this.prisma.member.findMany(args)
  }

  findOne(args: FindUniqueMemberArgs) {
    return this.prisma.member.findUnique(args)
  }

  update(updateMemberInput: UpdateMemberInput) {
    const { uid, ...data } = updateMemberInput
    return this.prisma.member.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueMemberArgs) {
    return this.prisma.member.delete(args)
  }
}
