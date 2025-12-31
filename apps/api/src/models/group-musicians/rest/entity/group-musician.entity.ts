import { IsOptional } from 'class-validator'
import { GroupMusician } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class GroupMusicianEntity implements RestrictProperties<
  GroupMusicianEntity,
  GroupMusician
> {
  name: string
  id: number
  role: string
  @IsOptional()
  startYear: number
  @IsOptional()
  endYear: number
  createdAt: Date
  updatedAt: Date
  groupId: number
}
