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
import { CreateTrack } from './dtos/create.dto'
import { TrackQueryDto } from './dtos/query.dto'
import { UpdateTrack } from './dtos/update.dto'
import { TrackEntity } from './entity/track.entity'

@ApiTags('tracks')
@Controller('tracks')
export class TracksController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: TrackEntity })
  @Post()
  create(@Body() createTrackDto: CreateTrack) {
    return this.prisma.track.create({ data: createTrackDto })
  }

  @ApiOkResponse({ type: [TrackEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: TrackQueryDto) {
    return this.prisma.track.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: TrackEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.track.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: TrackEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateTrackDto: UpdateTrack) {
    return this.prisma.track.update({
      where: { id },
      data: updateTrackDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.prisma.track.delete({ where: { id } })
  }
}
