import { Module } from '@nestjs/common'
import { GroupsService } from './graphql/groups.service'
import { GroupsResolver } from './graphql/groups.resolver'
import { GroupsController } from './rest/groups.controller'

@Module({
  providers: [GroupsResolver, GroupsService],
  exports: [GroupsService],
  controllers: [GroupsController],
})
export class GroupsModule {}
