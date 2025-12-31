import { InputType, OmitType } from '@nestjs/graphql'
import { CollectionItem } from '../entity/collection-item.entity'

@InputType()
export class CreateCollectionItemInput extends OmitType(
  CollectionItem,
  ['id', 'createdAt', 'updatedAt'],
  InputType,
) {}
