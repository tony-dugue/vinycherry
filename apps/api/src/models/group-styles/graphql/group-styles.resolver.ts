import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { AllowAuthenticated } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateGroupStyleInput } from './dtos/create-group-style.input'
import {
  FindManyGroupStyleArgs,
  FindUniqueGroupStyleArgs,
} from './dtos/find.args'
import { UpdateGroupStyleInput } from './dtos/update-group-style.input'
import { GroupStyle } from './entity/group-style.entity'
import { GroupStylesService } from './group-styles.service'

@Resolver(() => GroupStyle)
export class GroupStylesResolver {
  constructor(
    private readonly groupStylesService: GroupStylesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => GroupStyle)
  createGroupStyle(@Args('createGroupStyleInput') args: CreateGroupStyleInput) {
    return this.groupStylesService.create(args)
  }

  @Query(() => [GroupStyle], { name: 'groupStyles' })
  findAll(@Args() args: FindManyGroupStyleArgs) {
    return this.groupStylesService.findAll(args)
  }

  @Query(() => GroupStyle, { name: 'groupStyle' })
  findOne(@Args() args: FindUniqueGroupStyleArgs) {
    return this.groupStylesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => GroupStyle)
  async updateGroupStyle(
    @Args('updateGroupStyleInput') args: UpdateGroupStyleInput,
  ) {
    return this.groupStylesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => GroupStyle)
  async removeGroupStyle(@Args() args: FindUniqueGroupStyleArgs) {
    return this.groupStylesService.remove(args)
  }
}
