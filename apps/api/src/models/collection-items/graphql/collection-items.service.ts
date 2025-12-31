import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateCollectionItemInput } from './dtos/create-collection-item.input'
import {
  FindManyCollectionItemArgs,
  FindUniqueCollectionItemArgs,
} from './dtos/find.args'
import { UpdateCollectionItemInput } from './dtos/update-collection-item.input'

@Injectable()
export class CollectionItemsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCollectionItemInput: CreateCollectionItemInput) {
    return this.prisma.collectionItem.create({
      data: createCollectionItemInput,
    })
  }

  findAll(args: FindManyCollectionItemArgs) {
    return this.prisma.collectionItem.findMany(args)
  }

  findOne(args: FindUniqueCollectionItemArgs) {
    return this.prisma.collectionItem.findUnique(args)
  }

  update(updateCollectionItemInput: UpdateCollectionItemInput) {
    const { id, ...data } = updateCollectionItemInput
    return this.prisma.collectionItem.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueCollectionItemArgs) {
    return this.prisma.collectionItem.delete(args)
  }
}
