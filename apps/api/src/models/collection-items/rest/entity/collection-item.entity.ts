import { IsOptional } from 'class-validator'
import { $Enums, CollectionItem } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class CollectionItemEntity implements RestrictProperties<
  CollectionItemEntity,
  CollectionItem
> {
  id: number
  memberId: string
  albumVersionId: number
  condition: $Enums.Condition
  @IsOptional()
  notes: string
  createdAt: Date
  updatedAt: Date
}
