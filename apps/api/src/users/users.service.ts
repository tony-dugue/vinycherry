import { Injectable } from '@nestjs/common'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    return `This action adds a new user : #${createUserInput.uid}`
  }

  findAll() {
    return `This action returns all users`
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
