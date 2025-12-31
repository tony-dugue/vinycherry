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
import { CreateInstrument } from './dtos/create.dto'
import { InstrumentQueryDto } from './dtos/query.dto'
import { UpdateInstrument } from './dtos/update.dto'
import { InstrumentEntity } from './entity/instrument.entity'

@ApiTags('instruments')
@Controller('instruments')
export class InstrumentsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: InstrumentEntity })
  @Post()
  create(@Body() createInstrumentDto: CreateInstrument) {
    return this.prisma.instrument.create({ data: createInstrumentDto })
  }

  @ApiOkResponse({ type: [InstrumentEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: InstrumentQueryDto) {
    return this.prisma.instrument.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: InstrumentEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.instrument.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: InstrumentEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateInstrumentDto: UpdateInstrument,
  ) {
    return this.prisma.instrument.update({
      where: { id },
      data: updateInstrumentDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.prisma.instrument.delete({ where: { id } })
  }
}
