import { OmitType } from '@nestjs/swagger'
import { CollectionItemEntity } from '../entity/collection-item.entity'

export class CreateCollectionItem extends OmitType(CollectionItemEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
