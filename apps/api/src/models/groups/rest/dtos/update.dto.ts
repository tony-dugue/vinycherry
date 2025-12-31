import { PartialType } from '@nestjs/swagger'
import { Group } from 'prisma/generated/prisma/client'
import { CreateGroup } from './create.dto'

export class UpdateGroup extends PartialType(CreateGroup) {
  id: Group['id']
}
