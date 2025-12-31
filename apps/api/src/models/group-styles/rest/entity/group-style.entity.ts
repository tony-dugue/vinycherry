import { GroupStyle } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class GroupStyleEntity implements RestrictProperties<
  GroupStyleEntity,
  GroupStyle
> {
  groupId: number
  styleId: number
}
