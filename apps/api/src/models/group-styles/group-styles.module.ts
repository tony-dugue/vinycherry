import { Module } from '@nestjs/common'
import { GroupStylesService } from './graphql/group-styles.service'
import { GroupStylesResolver } from './graphql/group-styles.resolver'
import { GroupStylesController } from './rest/group-styles.controller'

@Module({
  providers: [GroupStylesResolver, GroupStylesService],
  exports: [GroupStylesService],
  controllers: [GroupStylesController],
})
export class GroupStylesModule {}
