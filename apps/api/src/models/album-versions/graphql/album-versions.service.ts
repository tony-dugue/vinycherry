import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'

import { CreateAlbumVersionInput } from './dtos/create-album-version.input'
import {
  FindManyAlbumVersionArgs,
  FindUniqueAlbumVersionArgs,
} from './dtos/find.args'
import { UpdateAlbumVersionInput } from './dtos/update-album-version.input'

@Injectable()
export class AlbumVersionsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createAlbumVersionInput: CreateAlbumVersionInput) {
    return this.prisma.albumVersion.create({
      data: createAlbumVersionInput,
    })
  }

  findAll(args: FindManyAlbumVersionArgs) {
    return this.prisma.albumVersion.findMany(args)
  }

  findOne(args: FindUniqueAlbumVersionArgs) {
    return this.prisma.albumVersion.findUnique(args)
  }

  update(updateAlbumVersionInput: UpdateAlbumVersionInput) {
    const { id, ...data } = updateAlbumVersionInput
    return this.prisma.albumVersion.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueAlbumVersionArgs) {
    return this.prisma.albumVersion.delete(args)
  }
}
