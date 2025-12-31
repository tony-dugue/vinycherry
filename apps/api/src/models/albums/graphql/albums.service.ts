import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateAlbumInput } from './dtos/create-album.input'
import { FindManyAlbumArgs, FindUniqueAlbumArgs } from './dtos/find.args'
import { UpdateAlbumInput } from './dtos/update-album.input'

@Injectable()
export class AlbumsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createAlbumInput: CreateAlbumInput) {
    return this.prisma.album.create({
      data: createAlbumInput,
    })
  }

  findAll(args: FindManyAlbumArgs) {
    return this.prisma.album.findMany(args)
  }

  findOne(args: FindUniqueAlbumArgs) {
    return this.prisma.album.findUnique(args)
  }

  update(updateAlbumInput: UpdateAlbumInput) {
    const { id, ...data } = updateAlbumInput
    return this.prisma.album.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueAlbumArgs) {
    return this.prisma.album.delete(args)
  }
}
