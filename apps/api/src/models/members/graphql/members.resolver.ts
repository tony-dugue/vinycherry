import { NotFoundException } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { GetUserType } from 'src/common/types'
import { CreateMemberInput } from './dtos/create-member.input'
import { FindManyMemberArgs, FindUniqueMemberArgs } from './dtos/find.args'
import { UpdateMemberInput } from './dtos/update-member.input'
import { Member } from './entity/member.entity'
import { MembersService } from './members.service'

@Resolver(() => Member)
export class MembersResolver {
  constructor(
    private readonly membersService: MembersService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Member)
  createMember(
    @Args('createMemberInput') args: CreateMemberInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.membersService.create(args)
  }

  @Query(() => [Member], { name: 'members' })
  findAll(@Args() args: FindManyMemberArgs) {
    return this.membersService.findAll(args)
  }

  @Query(() => Member, { name: 'member' })
  findOne(@Args() args: FindUniqueMemberArgs) {
    return this.membersService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Member)
  async updateMember(
    @Args('updateMemberInput') args: UpdateMemberInput,
    @GetUser() user: GetUserType,
  ) {
    const member = await this.prisma.member.findUnique({
      where: { uid: args.uid },
    })

    if (!member) {
      throw new NotFoundException(`Member ${args.uid} not found`)
    }

    checkRowLevelPermission(user, member.uid)

    return this.membersService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Member)
  async removeMember(
    @Args() args: FindUniqueMemberArgs,
    @GetUser() user: GetUserType,
  ) {
    const member = await this.prisma.member.findUnique(args)

    if (!member) {
      throw new NotFoundException(`Member ${user.uid} not found`)
    }

    checkRowLevelPermission(user, member.uid)
    return this.membersService.remove(args)
  }
}
