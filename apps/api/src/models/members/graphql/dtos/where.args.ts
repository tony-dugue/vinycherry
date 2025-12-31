import { InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from 'prisma/generated/prisma/client'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { CollectionItemListRelationFilter } from 'src/models/collection-items/graphql/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'

@InputType()
export class MemberWhereUniqueInput {
  uid: string
}

@InputType()
export class MemberWhereInputStrict implements RestrictProperties<
  MemberWhereInputStrict,
  Prisma.MemberWhereInput
> {
  uid: StringFilter
  displayName: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter

  User: UserRelationFilter
  CollectionItems: CollectionItemListRelationFilter

  AND: MemberWhereInput[]
  OR: MemberWhereInput[]
  NOT: MemberWhereInput[]
}

@InputType()
export class MemberWhereInput extends PartialType(MemberWhereInputStrict) {}

@InputType()
export class MemberListRelationFilter {
  every?: MemberWhereInput
  some?: MemberWhereInput
  none?: MemberWhereInput
}

@InputType()
export class MemberRelationFilter {
  is?: MemberWhereInput
  isNot?: MemberWhereInput
}
