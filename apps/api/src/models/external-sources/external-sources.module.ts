import { Module } from '@nestjs/common'
import { ExternalSourcesService } from './graphql/external-sources.service'
import { ExternalSourcesResolver } from './graphql/external-sources.resolver'
import { ExternalSourcesController } from './rest/external-sources.controller'

@Module({
  providers: [ExternalSourcesResolver, ExternalSourcesService],
  exports: [ExternalSourcesService],
  controllers: [ExternalSourcesController],
})
export class ExternalSourcesModule {}
