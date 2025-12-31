import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import {
  $Enums,
  CollectionItem as CollectionItemType,
} from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType($Enums.Condition, {
  name: 'Condition',
})

@ObjectType()
export class CollectionItem implements RestrictProperties<
  CollectionItem,
  CollectionItemType
> {
  memberId: string
  albumVersionId: number
  id: number
  @Field(() => $Enums.Condition)
  condition: $Enums.Condition
  @Field({ nullable: true })
  notes: string
  createdAt: Date
  updatedAt: Date

  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
