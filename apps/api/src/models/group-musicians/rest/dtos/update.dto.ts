import { PartialType } from '@nestjs/swagger'
import { GroupMusician } from 'prisma/generated/prisma/client'
import { CreateGroupMusician } from './create.dto'

export class UpdateGroupMusician extends PartialType(CreateGroupMusician) {
  id: GroupMusician['id']
}
