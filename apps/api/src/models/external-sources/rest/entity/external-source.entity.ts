import { IsOptional } from 'class-validator'
import {
  ExternalSource,
  ExternalSourceType,
} from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ExternalSourceEntity implements RestrictProperties<
  ExternalSourceEntity,
  ExternalSource
> {
  id: number
  source: ExternalSourceType
  externalId: string
  createdAt: Date
  updatedAt: Date
  @IsOptional()
  albumId: number
}
