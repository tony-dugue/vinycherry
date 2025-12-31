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
import { CreateAlbum } from './dtos/create.dto'
import { AlbumQueryDto } from './dtos/query.dto'
import { UpdateAlbum } from './dtos/update.dto'
import { AlbumEntity } from './entity/album.entity'

@ApiTags('albums')
@Controller('albums')
export class AlbumsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AlbumEntity })
  @Post()
  create(@Body() createAlbumDto: CreateAlbum) {
    return this.prisma.album.create({ data: createAlbumDto })
  }

  @ApiOkResponse({ type: [AlbumEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: AlbumQueryDto) {
    return this.prisma.album.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: AlbumEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.album.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: AlbumEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateAlbumDto: UpdateAlbum) {
    return this.prisma.album.update({
      where: { id },
      data: updateAlbumDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.prisma.album.delete({ where: { id } })
  }
}
