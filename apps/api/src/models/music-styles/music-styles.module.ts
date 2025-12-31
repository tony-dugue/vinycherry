import { Module } from '@nestjs/common'
import { MusicStylesService } from './graphql/music-styles.service'
import { MusicStylesResolver } from './graphql/music-styles.resolver'
import { MusicStylesController } from './rest/music-styles.controller'

@Module({
  providers: [MusicStylesResolver, MusicStylesService],
  exports: [MusicStylesService],
  controllers: [MusicStylesController],
})
export class MusicStylesModule {}
