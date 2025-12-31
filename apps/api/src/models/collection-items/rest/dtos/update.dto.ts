import { PartialType } from '@nestjs/swagger'
import { CollectionItem } from 'prisma/generated/prisma/client'
import { CreateCollectionItem } from './create.dto'

export class UpdateCollectionItem extends PartialType(CreateCollectionItem) {
  id: CollectionItem['id']
}
