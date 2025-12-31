import { ObjectType } from '@nestjs/graphql'
import { GroupStyle as GroupStyleType } from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class GroupStyle implements RestrictProperties<
  GroupStyle,
  GroupStyleType
> {
  groupId: number
  styleId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
