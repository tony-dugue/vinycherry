import { Module } from '@nestjs/common'
import { AlbumsService } from './graphql/albums.service'
import { AlbumsResolver } from './graphql/albums.resolver'
import { AlbumsController } from './rest/albums.controller'

@Module({
  providers: [AlbumsResolver, AlbumsService],
  exports: [AlbumsService],
  controllers: [AlbumsController],
})
export class AlbumsModule {}
