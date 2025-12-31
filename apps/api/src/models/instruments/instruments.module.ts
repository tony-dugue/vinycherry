import { Module } from '@nestjs/common'
import { InstrumentsService } from './graphql/instruments.service'
import { InstrumentsResolver } from './graphql/instruments.resolver'
import { InstrumentsController } from './rest/instruments.controller'

@Module({
  providers: [InstrumentsResolver, InstrumentsService],
  exports: [InstrumentsService],
  controllers: [InstrumentsController],
})
export class InstrumentsModule {}
