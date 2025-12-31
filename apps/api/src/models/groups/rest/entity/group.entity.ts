import { IsOptional } from 'class-validator'
import { Group } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class GroupEntity implements RestrictProperties<GroupEntity, Group> {
  name: string
  id: number
  @IsOptional()
  description: string
  @IsOptional()
  image: string
  createdAt: Date
  updatedAt: Date
}
