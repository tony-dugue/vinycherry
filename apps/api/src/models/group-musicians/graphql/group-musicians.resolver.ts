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
import { GroupMusicianInstrument } from 'src/models/group-musician-instruments/graphql/entity/group-musician-instrument.entity'
import { Group } from 'src/models/groups/graphql/entity/group.entity'
import { CreateGroupMusicianInput } from './dtos/create-group-musician.input'
import {
  FindManyGroupMusicianArgs,
  FindUniqueGroupMusicianArgs,
} from './dtos/find.args'
import { UpdateGroupMusicianInput } from './dtos/update-group-musician.input'
import { GroupMusician } from './entity/group-musician.entity'
import { GroupMusiciansService } from './group-musicians.service'

@Resolver(() => GroupMusician)
export class GroupMusiciansResolver {
  constructor(
    private readonly groupMusiciansService: GroupMusiciansService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => GroupMusician)
  createGroupMusician(
    @Args('createGroupMusicianInput') args: CreateGroupMusicianInput,
  ) {
    return this.groupMusiciansService.create(args)
  }

  @Query(() => [GroupMusician], { name: 'groupMusicians' })
  findAll(@Args() args: FindManyGroupMusicianArgs) {
    return this.groupMusiciansService.findAll(args)
  }

  @Query(() => GroupMusician, { name: 'groupMusician' })
  findOne(@Args() args: FindUniqueGroupMusicianArgs) {
    return this.groupMusiciansService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => GroupMusician)
  async updateGroupMusician(
    @Args('updateGroupMusicianInput') args: UpdateGroupMusicianInput,
  ) {
    return this.groupMusiciansService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => GroupMusician)
  async removeGroupMusician(@Args() args: FindUniqueGroupMusicianArgs) {
    return this.groupMusiciansService.remove(args)
  }

  @ResolveField(() => Group)
  group(@Parent() gm: GroupMusician) {
    return this.prisma.group.findUnique({
      where: { id: gm.groupId },
    })
  }

  @ResolveField(() => [GroupMusicianInstrument])
  instruments(@Parent() gm: GroupMusician) {
    return this.prisma.groupMusicianInstrument.findMany({
      where: { groupMusicianId: gm.id },
    })
  }
}
