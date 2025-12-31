import { OmitType } from '@nestjs/swagger'
import { PurchaseInfoEntity } from '../entity/purchase-info.entity'

export class CreatePurchaseInfo extends OmitType(PurchaseInfoEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
