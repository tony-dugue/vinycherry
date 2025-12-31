import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { AllowAuthenticated } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Album } from 'src/models/albums/graphql/entity/album.entity'
import { GroupMusician } from 'src/models/group-musicians/graphql/entity/group-musician.entity'
import { GroupStyle } from 'src/models/group-styles/graphql/entity/group-style.entity'
import { CreateGroupInput } from './dtos/create-group.input'
import { FindManyGroupArgs, FindUniqueGroupArgs } from './dtos/find.args'
import { UpdateGroupInput } from './dtos/update-group.input'
import { Group } from './entity/group.entity'
import { GroupsService } from './groups.service'

@Resolver(() => Group)
export class GroupsResolver {
  constructor(
    private readonly groupsService: GroupsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Group)
  createGroup(@Args('createGroupInput') args: CreateGroupInput) {
    return this.groupsService.create(args)
  }

  @Query(() => [Group], { name: 'groups' })
  findAll(@Args() args: FindManyGroupArgs) {
    return this.groupsService.findAll(args)
  }

  @Query(() => Group, { name: 'group' })
  findOne(@Args() args: FindUniqueGroupArgs) {
    return this.groupsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Group)
  async updateGroup(@Args('updateGroupInput') args: UpdateGroupInput) {
    return this.groupsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Group)
  async removeGroup(@Args() args: FindUniqueGroupArgs) {
    return this.groupsService.remove(args)
  }

  @ResolveField(() => [GroupStyle])
  styles(@Parent() group: Group) {
    return this.prisma.groupStyle.findMany({
      where: { groupId: group.id },
    })
  }

  @ResolveField(() => [Album])
  albums(@Parent() group: Group) {
    return this.prisma.album.findMany({
      where: { groupId: group.id },
    })
  }

  @ResolveField(() => [GroupMusician])
  musicians(@Parent() group: Group) {
    return this.prisma.groupMusician.findMany({
      where: { groupId: group.id },
    })
  }
}
