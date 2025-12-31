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
import { CreateGroupMusician } from './dtos/create.dto'
import { GroupMusicianQueryDto } from './dtos/query.dto'
import { UpdateGroupMusician } from './dtos/update.dto'
import { GroupMusicianEntity } from './entity/group-musician.entity'

@ApiTags('group-musicians')
@Controller('group-musicians')
export class GroupMusiciansController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: GroupMusicianEntity })
  @Post()
  create(@Body() createGroupMusicianDto: CreateGroupMusician) {
    return this.prisma.groupMusician.create({ data: createGroupMusicianDto })
  }

  @ApiOkResponse({ type: [GroupMusicianEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: GroupMusicianQueryDto) {
    return this.prisma.groupMusician.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: GroupMusicianEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.groupMusician.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: GroupMusicianEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateGroupMusicianDto: UpdateGroupMusician,
  ) {
    return this.prisma.groupMusician.update({
      where: { id },
      data: updateGroupMusicianDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.prisma.groupMusician.delete({ where: { id } })
  }
}
