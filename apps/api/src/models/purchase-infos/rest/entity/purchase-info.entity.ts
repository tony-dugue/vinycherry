import { IsOptional } from 'class-validator'
import { PurchaseInfo } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class PurchaseInfoEntity implements RestrictProperties<
  PurchaseInfoEntity,
  PurchaseInfo
> {
  id: number
  @IsOptional()
  price: number
  @IsOptional()
  place: string
  @IsOptional()
  date: Date
  createdAt: Date
  updatedAt: Date
  collectionItemId: number
}
