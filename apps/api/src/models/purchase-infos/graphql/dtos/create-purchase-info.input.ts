import { InputType, OmitType } from '@nestjs/graphql'
import { PurchaseInfo } from '../entity/purchase-info.entity'

@InputType()
export class CreatePurchaseInfoInput extends OmitType(
  PurchaseInfo,
  ['createdAt', 'updatedAt', 'id'],
  InputType,
) {}
