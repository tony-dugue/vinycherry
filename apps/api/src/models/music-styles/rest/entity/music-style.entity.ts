import { MusicStyle } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class MusicStyleEntity implements RestrictProperties<
  MusicStyleEntity,
  MusicStyle
> {
  name: string
  id: number
  createdAt: Date
  updatedAt: Date
}
