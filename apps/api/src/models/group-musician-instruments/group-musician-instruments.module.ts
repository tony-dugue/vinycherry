import { Module } from '@nestjs/common'
import { GroupMusicianInstrumentsService } from './graphql/group-musician-instruments.service'
import { GroupMusicianInstrumentsResolver } from './graphql/group-musician-instruments.resolver'
import { GroupMusicianInstrumentsController } from './rest/group-musician-instruments.controller'

@Module({
  providers: [
    GroupMusicianInstrumentsResolver,
    GroupMusicianInstrumentsService,
  ],
  exports: [GroupMusicianInstrumentsService],
  controllers: [GroupMusicianInstrumentsController],
})
export class GroupMusicianInstrumentsModule {}
