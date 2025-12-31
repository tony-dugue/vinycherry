import { Module } from '@nestjs/common'
import { CollectionItemsService } from './graphql/collection-items.service'
import { CollectionItemsResolver } from './graphql/collection-items.resolver'
import { CollectionItemsController } from './rest/collection-items.controller'

@Module({
  providers: [CollectionItemsResolver, CollectionItemsService],
  exports: [CollectionItemsService],
  controllers: [CollectionItemsController],
})
export class CollectionItemsModule {}
