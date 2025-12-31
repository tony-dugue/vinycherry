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
import { AlbumVersion } from 'src/models/album-versions/graphql/entity/album-version.entity'
import { Member } from 'src/models/members/graphql/entity/member.entity'
import { PurchaseInfo } from 'src/models/purchase-infos/graphql/entity/purchase-info.entity'
import { CollectionItemsService } from './collection-items.service'
import { CreateCollectionItemInput } from './dtos/create-collection-item.input'
import {
  FindManyCollectionItemArgs,
  FindUniqueCollectionItemArgs,
} from './dtos/find.args'
import { UpdateCollectionItemInput } from './dtos/update-collection-item.input'
import { CollectionItem } from './entity/collection-item.entity'

@Resolver(() => CollectionItem)
export class CollectionItemsResolver {
  constructor(
    private readonly collectionItemsService: CollectionItemsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => CollectionItem)
  createCollectionItem(
    @Args('createCollectionItemInput') args: CreateCollectionItemInput,
  ) {
    return this.collectionItemsService.create(args)
  }

  @Query(() => [CollectionItem], { name: 'collectionItems' })
  findAll(@Args() args: FindManyCollectionItemArgs) {
    return this.collectionItemsService.findAll(args)
  }

  @Query(() => CollectionItem, { name: 'collectionItem' })
  findOne(@Args() args: FindUniqueCollectionItemArgs) {
    return this.collectionItemsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => CollectionItem)
  async updateCollectionItem(
    @Args('updateCollectionItemInput') args: UpdateCollectionItemInput,
    @GetUser() user: GetUserType,
  ) {
    const collectionItem = await this.prisma.collectionItem.findUnique({
      where: { id: args.id },
    })

    if (!collectionItem) {
      throw new NotFoundException('CollectionItem not found')
    }

    checkRowLevelPermission(user, collectionItem.memberId)

    return this.collectionItemsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => CollectionItem)
  async removeCollectionItem(
    @Args() args: FindUniqueCollectionItemArgs,
    @GetUser() user: GetUserType,
  ) {
    const collectionItem = await this.prisma.collectionItem.findUnique({
      where: args.where,
    })

    if (!collectionItem) {
      throw new NotFoundException('CollectionItem not found')
    }

    checkRowLevelPermission(user, collectionItem.memberId)

    return this.collectionItemsService.remove(args)
  }

  @ResolveField(() => Member)
  member(@Parent() item: CollectionItem) {
    return this.prisma.member.findUnique({
      where: { uid: item.memberId },
    })
  }

  @ResolveField(() => AlbumVersion)
  albumVersion(@Parent() item: CollectionItem) {
    return this.prisma.albumVersion.findUnique({
      where: { id: item.albumVersionId },
    })
  }

  @ResolveField(() => PurchaseInfo, { nullable: true })
  purchase(@Parent() item: CollectionItem) {
    return this.prisma.purchaseInfo.findUnique({
      where: { collectionItemId: item.id },
    })
  }
}
