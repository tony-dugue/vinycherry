import { Field, ObjectType } from '@nestjs/graphql'
import { PurchaseInfo as PurchaseInfoType } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class PurchaseInfo implements RestrictProperties<
  PurchaseInfo,
  PurchaseInfoType
> {
  id: number
  @Field({ nullable: true })
  price: number
  @Field({ nullable: true })
  place: string
  @Field({ nullable: true })
  date: Date
  createdAt: Date
  updatedAt: Date
  collectionItemId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
