import { Module } from '@nestjs/common'
import { TracksService } from './graphql/tracks.service'
import { TracksResolver } from './graphql/tracks.resolver'
import { TracksController } from './rest/tracks.controller'

@Module({
  providers: [TracksResolver, TracksService],
  exports: [TracksService],
  controllers: [TracksController],
})
export class TracksModule {}
