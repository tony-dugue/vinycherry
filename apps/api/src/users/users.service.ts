import { Injectable } from '@nestjs/common'
import { PrismaService } from '../util/prisma.service'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserInput: CreateUserInput): Promise<User> {
    return this.prisma.user.create({ data: createUserInput })
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany()
  }

  findOne(uid: string) {
    return `This action returns a #${uid} user`
  }

  update(uid: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${updateUserInput.uid} user`
  }

  remove(uid: string) {
    return `This action removes a #${uid} user`
  }
}
