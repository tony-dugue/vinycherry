import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common'

import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'
import { AllowAuthenticated } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateGroupStyle } from './dtos/create.dto'
import { GroupStyleQueryDto } from './dtos/query.dto'
import { GroupStyleEntity } from './entity/group-style.entity'

@ApiTags('group-styles')
@Controller('group-styles')
export class GroupStylesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: GroupStyleEntity })
  @Post()
  create(@Body() createGroupStyleDto: CreateGroupStyle) {
    return this.prisma.groupStyle.create({ data: createGroupStyleDto })
  }

  @ApiOkResponse({ type: [GroupStyleEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: GroupStyleQueryDto) {
    return this.prisma.groupStyle.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: GroupStyleEntity })
  @Get(':id')
  findOne(
    @Query('groupId') groupId: number,
    @Query('styleId') styleId: number,
  ) {
    return this.prisma.groupStyle.findUnique({
      where: {
        groupId_styleId: {
          groupId: +groupId,
          styleId: +styleId,
        },
      },
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(
    @Query('groupId') groupId: number,
    @Query('styleId') styleId: number,
  ) {
    // 🔐 Permission à vérifier sur l'entité métier
    return this.prisma.groupStyle.delete({
      where: {
        groupId_styleId: {
          groupId: +groupId,
          styleId: +styleId,
        },
      },
    })
  }
}
