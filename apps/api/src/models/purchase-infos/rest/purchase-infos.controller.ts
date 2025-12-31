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
import { CreatePurchaseInfo } from './dtos/create.dto'
import { PurchaseInfoQueryDto } from './dtos/query.dto'
import { UpdatePurchaseInfo } from './dtos/update.dto'
import { PurchaseInfoEntity } from './entity/purchase-info.entity'

@ApiTags('purchase-infos')
@Controller('purchase-infos')
export class PurchaseInfosController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: PurchaseInfoEntity })
  @Post()
  create(
    @Body() createPurchaseInfoDto: CreatePurchaseInfo,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(
      user,
      createPurchaseInfoDto.collectionItemId?.toString(),
    )
    return this.prisma.purchaseInfo.create({ data: createPurchaseInfoDto })
  }

  @ApiOkResponse({ type: [PurchaseInfoEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: PurchaseInfoQueryDto) {
    return this.prisma.purchaseInfo.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: PurchaseInfoEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.purchaseInfo.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: PurchaseInfoEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updatePurchaseInfoDto: UpdatePurchaseInfo,
    @GetUser() user: GetUserType,
  ) {
    const purchaseInfo = await this.prisma.purchaseInfo.findUnique({
      where: { id },
    })

    if (!purchaseInfo) {
      throw new NotFoundException(`purchaseInfo ${id} not found`)
    }

    checkRowLevelPermission(user, purchaseInfo.collectionItemId.toString())
    return this.prisma.purchaseInfo.update({
      where: { id },
      data: updatePurchaseInfoDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: number, @GetUser() user: GetUserType) {
    const purchaseInfo = await this.prisma.purchaseInfo.findUnique({
      where: { id },
    })

    if (!purchaseInfo) {
      throw new NotFoundException(`purchaseInfo not found`)
    }

    checkRowLevelPermission(user, purchaseInfo.collectionItemId.toString())
    return this.prisma.purchaseInfo.delete({ where: { id } })
  }
}
