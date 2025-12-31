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
import { CreateAlbumVersion } from './dtos/create.dto'
import { AlbumVersionQueryDto } from './dtos/query.dto'
import { UpdateAlbumVersion } from './dtos/update.dto'
import { AlbumVersionEntity } from './entity/album-version.entity'

@ApiTags('album-versions')
@Controller('album-versions')
export class AlbumVersionsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AlbumVersionEntity })
  @Post()
  create(@Body() createAlbumVersionDto: CreateAlbumVersion) {
    return this.prisma.albumVersion.create({ data: createAlbumVersionDto })
  }

  @ApiOkResponse({ type: [AlbumVersionEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: AlbumVersionQueryDto) {
    return this.prisma.albumVersion.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: AlbumVersionEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.albumVersion.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: AlbumVersionEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAlbumVersionDto: UpdateAlbumVersion,
  ) {
    return this.prisma.albumVersion.update({
      where: { id },
      data: updateAlbumVersionDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.prisma.albumVersion.delete({ where: { id } })
  }
}
