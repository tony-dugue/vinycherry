import { InputType, PartialType } from '@nestjs/graphql'
import { PurchaseInfo } from 'prisma/generated/prisma/client'
import { CreatePurchaseInfoInput } from './create-purchase-info.input'

@InputType()
export class UpdatePurchaseInfoInput extends PartialType(
  CreatePurchaseInfoInput,
) {
  id: PurchaseInfo['id']
}
