import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common'

import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'
import { AllowAuthenticated } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateGroupMusicianInstrument } from './dtos/create.dto'
import { GroupMusicianInstrumentQueryDto } from './dtos/query.dto'
import { GroupMusicianInstrumentEntity } from './entity/group-musician-instrument.entity'

@ApiTags('group-musician-instruments')
@Controller('group-musician-instruments')
export class GroupMusicianInstrumentsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: GroupMusicianInstrumentEntity })
  @Post()
  create(
    @Body() createGroupMusicianInstrumentDto: CreateGroupMusicianInstrument,
  ) {
    // 🔐 Permission à faire sur l'entité parente (ex: Group / Musician)
    // PAS sur la table de liaison checkRowLevelPermission(user, group.uid)

    return this.prisma.groupMusicianInstrument.create({
      data: createGroupMusicianInstrumentDto,
    })
  }

  @ApiOkResponse({ type: [GroupMusicianInstrumentEntity] })
  @Get()
  findAll(
    @Query() { skip, take, order, sortBy }: GroupMusicianInstrumentQueryDto,
  ) {
    return this.prisma.groupMusicianInstrument.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: GroupMusicianInstrumentEntity })
  @Get(':id')
  findOne(
    @Query('groupMusicianId') groupMusicianId: number,
    @Query('instrumentId') instrumentId: number,
  ) {
    return this.prisma.groupMusicianInstrument.findUnique({
      where: {
        groupMusicianId_instrumentId: {
          groupMusicianId: +groupMusicianId,
          instrumentId: +instrumentId,
        },
      },
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(
    @Query('groupMusicianId') groupMusicianId: number,
    @Query('instrumentId') instrumentId: number,
  ) {
    // 🔐 Permission à vérifier sur l'entité métier
    // ex: group / musician / collection checkRowLevelPermission(user, group.uid)
    return this.prisma.groupMusicianInstrument.delete({
      where: {
        groupMusicianId_instrumentId: {
          groupMusicianId: +groupMusicianId,
          instrumentId: +instrumentId,
        },
      },
    })
  }
}
