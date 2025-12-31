import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreatePurchaseInfoInput } from './dtos/create-purchase-info.input'
import {
  FindManyPurchaseInfoArgs,
  FindUniquePurchaseInfoArgs,
} from './dtos/find.args'
import { UpdatePurchaseInfoInput } from './dtos/update-purchase-info.input'

@Injectable()
export class PurchaseInfosService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPurchaseInfoInput: CreatePurchaseInfoInput) {
    return this.prisma.purchaseInfo.create({
      data: createPurchaseInfoInput,
    })
  }

  findAll(args: FindManyPurchaseInfoArgs) {
    return this.prisma.purchaseInfo.findMany(args)
  }

  findOne(args: FindUniquePurchaseInfoArgs) {
    return this.prisma.purchaseInfo.findUnique(args)
  }

  update(updatePurchaseInfoInput: UpdatePurchaseInfoInput) {
    const { id, ...data } = updatePurchaseInfoInput
    return this.prisma.purchaseInfo.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniquePurchaseInfoArgs) {
    return this.prisma.purchaseInfo.delete(args)
  }
}
