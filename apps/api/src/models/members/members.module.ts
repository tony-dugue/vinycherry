import { Module } from '@nestjs/common'
import { MembersService } from './graphql/members.service'
import { MembersResolver } from './graphql/members.resolver'
import { MembersController } from './rest/members.controller'

@Module({
  providers: [MembersResolver, MembersService],
  exports: [MembersService],
  controllers: [MembersController],
})
export class MembersModule {}
