import {
  Body,
  Controller,
  Delete,
  Get,
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
import { AllowAuthenticated } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateGroup } from './dtos/create.dto'
import { GroupQueryDto } from './dtos/query.dto'
import { UpdateGroup } from './dtos/update.dto'
import { GroupEntity } from './entity/group.entity'

@ApiTags('groups')
@Controller('groups')
export class GroupsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: GroupEntity })
  @Post()
  create(@Body() createGroupDto: CreateGroup) {
    return this.prisma.group.create({ data: createGroupDto })
  }

  @ApiOkResponse({ type: [GroupEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: GroupQueryDto) {
    return this.prisma.group.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: GroupEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.group.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: GroupEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateGroupDto: UpdateGroup) {
    return this.prisma.group.update({
      where: { id },
      data: updateGroupDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.prisma.group.delete({ where: { id } })
  }
}
