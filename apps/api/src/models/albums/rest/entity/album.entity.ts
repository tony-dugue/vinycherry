import { IsOptional } from 'class-validator'
import { Album } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class AlbumEntity implements RestrictProperties<AlbumEntity, Album> {
  id: number
  title: string
  @IsOptional()
  releaseDate: Date
  @IsOptional()
  studio: string
  @IsOptional()
  coverUrl: string
  createdAt: Date
  updatedAt: Date
  groupId: number
}
