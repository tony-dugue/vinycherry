import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import {
  $Enums,
  ExternalSource as ExternalSourceType,
} from 'prisma/generated/prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType($Enums.ExternalSourceType, {
  name: 'ExternalSourceType',
})

@ObjectType()
export class ExternalSource implements RestrictProperties<
  ExternalSource,
  ExternalSourceType
> {
  id: number
  createdAt: Date
  updatedAt: Date

  @Field(() => $Enums.ExternalSourceType)
  source: $Enums.ExternalSourceType

  @Field({ nullable: true })
  albumId: number
  externalId: string

  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
