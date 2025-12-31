import { PartialType } from '@nestjs/swagger'
import { PurchaseInfo } from 'prisma/generated/prisma/client'
import { CreatePurchaseInfo } from './create.dto'

export class UpdatePurchaseInfo extends PartialType(CreatePurchaseInfo) {
  id: PurchaseInfo['id']
}
