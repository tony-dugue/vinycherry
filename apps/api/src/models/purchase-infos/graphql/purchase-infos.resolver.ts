import { NotFoundException } from '@nestjs/common'
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { GetUserType } from 'src/common/types'
import { CollectionItem } from 'src/models/collection-items/graphql/entity/collection-item.entity'
import { CreatePurchaseInfoInput } from './dtos/create-purchase-info.input'
import {
  FindManyPurchaseInfoArgs,
  FindUniquePurchaseInfoArgs,
} from './dtos/find.args'
import { UpdatePurchaseInfoInput } from './dtos/update-purchase-info.input'
import { PurchaseInfo } from './entity/purchase-info.entity'
import { PurchaseInfosService } from './purchase-infos.service'

@Resolver(() => PurchaseInfo)
export class PurchaseInfosResolver {
  constructor(
    private readonly purchaseInfosService: PurchaseInfosService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => PurchaseInfo)
  async createPurchaseInfo(
    @Args('createPurchaseInfoInput') args: CreatePurchaseInfoInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.collectionItemId?.toString())
    return this.purchaseInfosService.create(args)
  }

  @Query(() => [PurchaseInfo], { name: 'purchaseInfos' })
  findAll(@Args() args: FindManyPurchaseInfoArgs) {
    return this.purchaseInfosService.findAll(args)
  }

  @Query(() => PurchaseInfo, { name: 'purchaseInfo' })
  findOne(@Args() args: FindUniquePurchaseInfoArgs) {
    return this.purchaseInfosService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => PurchaseInfo)
  async updatePurchaseInfo(
    @Args('updatePurchaseInfoInput') args: UpdatePurchaseInfoInput,
    @GetUser() user: GetUserType,
  ) {
    const purchaseInfo = await this.prisma.purchaseInfo.findUnique({
      where: { id: args.id },
    })

    if (!purchaseInfo) {
      throw new NotFoundException(`purchaseInfo ${args.id} not found`)
    }

    checkRowLevelPermission(user, purchaseInfo.collectionItemId.toString())
    return this.purchaseInfosService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => PurchaseInfo)
  async removePurchaseInfo(
    @Args() args: FindUniquePurchaseInfoArgs,
    @GetUser() user: GetUserType,
  ) {
    const purchaseInfo = await this.prisma.purchaseInfo.findUnique({
      where: args.where,
    })

    if (!purchaseInfo) {
      throw new NotFoundException(`purchaseInfo not found`)
    }

    checkRowLevelPermission(user, purchaseInfo.collectionItemId.toString())
    return this.purchaseInfosService.remove(args)
  }

  @ResolveField(() => CollectionItem)
  collectionItem(@Parent() purchase: PurchaseInfo) {
    return this.prisma.collectionItem.findUnique({
      where: { id: purchase.collectionItemId },
    })
  }
}
