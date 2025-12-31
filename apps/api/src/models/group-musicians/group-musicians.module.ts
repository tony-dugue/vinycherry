import { Module } from '@nestjs/common'
import { GroupMusiciansService } from './graphql/group-musicians.service'
import { GroupMusiciansResolver } from './graphql/group-musicians.resolver'
import { GroupMusiciansController } from './rest/group-musicians.controller'

@Module({
  providers: [GroupMusiciansResolver, GroupMusiciansService],
  exports: [GroupMusiciansService],
  controllers: [GroupMusiciansController],
})
export class GroupMusiciansModule {}
