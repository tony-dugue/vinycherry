import { InputType, PartialType } from '@nestjs/graphql'
import { CollectionItem } from 'prisma/generated/prisma/client'
import { CreateCollectionItemInput } from './create-collection-item.input'

@InputType()
export class UpdateCollectionItemInput extends PartialType(
  CreateCollectionItemInput,
) {
  id: CollectionItem['id']
}
