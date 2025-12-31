import { IsOptional } from 'class-validator'
import { Track } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class TrackEntity implements RestrictProperties<TrackEntity, Track> {
  id: number
  title: string
  position: number
  @IsOptional()
  duration: number
  createdAt: Date
  updatedAt: Date
  albumId: number
}
