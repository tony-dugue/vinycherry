import { Module } from '@nestjs/common'
import { PurchaseInfosService } from './graphql/purchase-infos.service'
import { PurchaseInfosResolver } from './graphql/purchase-infos.resolver'
import { PurchaseInfosController } from './rest/purchase-infos.controller'

@Module({
  providers: [PurchaseInfosResolver, PurchaseInfosService],
  exports: [PurchaseInfosService],
  controllers: [PurchaseInfosController],
})
export class PurchaseInfosModule {}
