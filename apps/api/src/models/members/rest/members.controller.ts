import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common'

import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { GetUserType } from 'src/common/types'
import { CreateMember } from './dtos/create.dto'
import { MemberQueryDto } from './dtos/query.dto'
import { UpdateMember } from './dtos/update.dto'
import { MemberEntity } from './entity/member.entity'

@ApiTags('members')
@Controller('members')
export class MembersController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: MemberEntity })
  @Post()
  create(@Body() createMemberDto: CreateMember, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, createMemberDto.uid)
    return this.prisma.member.create({ data: createMemberDto })
  }

  @ApiOkResponse({ type: [MemberEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: MemberQueryDto) {
    return this.prisma.member.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: MemberEntity })
  @Get(':uid')
  findOne(@Param('uid') uid: string) {
    return this.prisma.member.findUnique({ where: { uid } })
  }

  @ApiOkResponse({ type: MemberEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':uid')
  async update(
    @Param('uid') uid: string,
    @Body() updateMemberDto: UpdateMember,
    @GetUser() user: GetUserType,
  ) {
    const member = await this.prisma.member.findUnique({ where: { uid } })

    if (!member) {
      throw new NotFoundException(`Member ${user.uid} not found`)
    }

    checkRowLevelPermission(user, member.uid)
    return this.prisma.member.update({
      where: { uid },
      data: updateMemberDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':uid')
  async remove(@Param('uid') uid: string, @GetUser() user: GetUserType) {
    const member = await this.prisma.member.findUnique({ where: { uid } })

    if (!member) {
      throw new NotFoundException(`Member ${user.uid} not found`)
    }

    checkRowLevelPermission(user, member.uid)

    return this.prisma.member.delete({ where: { uid } })
  }
}
