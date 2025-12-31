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
import { CreateExternalSource } from './dtos/create.dto'
import { ExternalSourceQueryDto } from './dtos/query.dto'
import { UpdateExternalSource } from './dtos/update.dto'
import { ExternalSourceEntity } from './entity/external-source.entity'

@ApiTags('external-sources')
@Controller('external-sources')
export class ExternalSourcesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ExternalSourceEntity })
  @Post()
  create(@Body() createExternalSourceDto: CreateExternalSource) {
    return this.prisma.externalSource.create({ data: createExternalSourceDto })
  }

  @ApiOkResponse({ type: [ExternalSourceEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: ExternalSourceQueryDto) {
    return this.prisma.externalSource.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: ExternalSourceEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.externalSource.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: ExternalSourceEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateExternalSourceDto: UpdateExternalSource,
  ) {
    return this.prisma.externalSource.update({
      where: { id },
      data: updateExternalSourceDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.prisma.externalSource.delete({ where: { id } })
  }
}
