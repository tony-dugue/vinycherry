import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateMusicStyleInput } from './dtos/create-music-style.input'
import {
  FindManyMusicStyleArgs,
  FindUniqueMusicStyleArgs,
} from './dtos/find.args'
import { UpdateMusicStyleInput } from './dtos/update-music-style.input'

@Injectable()
export class MusicStylesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createMusicStyleInput: CreateMusicStyleInput) {
    return this.prisma.musicStyle.create({
      data: createMusicStyleInput,
    })
  }

  findAll(args: FindManyMusicStyleArgs) {
    return this.prisma.musicStyle.findMany(args)
  }

  findOne(args: FindUniqueMusicStyleArgs) {
    return this.prisma.musicStyle.findUnique(args)
  }

  update(updateMusicStyleInput: UpdateMusicStyleInput) {
    const { id, ...data } = updateMusicStyleInput
    return this.prisma.musicStyle.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueMusicStyleArgs) {
    return this.prisma.musicStyle.delete(args)
  }
}
