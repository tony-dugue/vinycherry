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
import { CreateMusicStyle } from './dtos/create.dto'
import { MusicStyleQueryDto } from './dtos/query.dto'
import { UpdateMusicStyle } from './dtos/update.dto'
import { MusicStyleEntity } from './entity/music-style.entity'

@ApiTags('music-styles')
@Controller('music-styles')
export class MusicStylesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: MusicStyleEntity })
  @Post()
  create(@Body() createMusicStyleDto: CreateMusicStyle) {
    return this.prisma.musicStyle.create({ data: createMusicStyleDto })
  }

  @ApiOkResponse({ type: [MusicStyleEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: MusicStyleQueryDto) {
    return this.prisma.musicStyle.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: MusicStyleEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.musicStyle.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: MusicStyleEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateMusicStyleDto: UpdateMusicStyle,
  ) {
    return this.prisma.musicStyle.update({
      where: { id },
      data: updateMusicStyleDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.prisma.musicStyle.delete({ where: { id } })
  }
}
