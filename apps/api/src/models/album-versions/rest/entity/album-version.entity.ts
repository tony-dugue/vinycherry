import { IsOptional } from 'class-validator'
import { $Enums, AlbumVersion } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class AlbumVersionEntity implements RestrictProperties<
  AlbumVersionEntity,
  AlbumVersion
> {
  name: string
  id: number
  format: $Enums.SupportType
  @IsOptional()
  year: number
  createdAt: Date
  updatedAt: Date
  albumId: number
}
