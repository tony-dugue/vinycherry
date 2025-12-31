import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
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
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { GetUserType } from 'src/common/types'
import { CreateCollectionItem } from './dtos/create.dto'
import { CollectionItemQueryDto } from './dtos/query.dto'
import { UpdateCollectionItem } from './dtos/update.dto'
import { CollectionItemEntity } from './entity/collection-item.entity'

@ApiTags('collection-items')
@Controller('collection-items')
export class CollectionItemsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CollectionItemEntity })
  @Post()
  create(@Body() createCollectionItemDto: CreateCollectionItem) {
    return this.prisma.collectionItem.create({ data: createCollectionItemDto })
  }

  @ApiOkResponse({ type: [CollectionItemEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: CollectionItemQueryDto) {
    return this.prisma.collectionItem.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: CollectionItemEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.collectionItem.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: CollectionItemEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCollectionItemDto: UpdateCollectionItem,
    @GetUser() user: GetUserType,
  ) {
    const collectionItem = await this.prisma.collectionItem.findUnique({
      where: { id },
    })

    if (!collectionItem) {
      throw new NotFoundException('CollectionItem not found')
    }

    checkRowLevelPermission(user, collectionItem.memberId)
    return this.prisma.collectionItem.update({
      where: { id },
      data: updateCollectionItemDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: number, @GetUser() user: GetUserType) {
    const collectionItem = await this.prisma.collectionItem.findUnique({
      where: { id },
    })

    if (!collectionItem) {
      throw new NotFoundException('CollectionItem not found')
    }
    checkRowLevelPermission(user, collectionItem.memberId)
    return this.prisma.collectionItem.delete({ where: { id } })
  }
}
