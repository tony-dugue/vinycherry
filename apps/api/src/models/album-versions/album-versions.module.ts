import { Module } from '@nestjs/common'
import { AlbumVersionsService } from './graphql/album-versions.service'
import { AlbumVersionsResolver } from './graphql/album-versions.resolver'
import { AlbumVersionsController } from './rest/album-versions.controller'

@Module({
  providers: [AlbumVersionsResolver, AlbumVersionsService],
  exports: [AlbumVersionsService],
  controllers: [AlbumVersionsController],
})
export class AlbumVersionsModule {}
