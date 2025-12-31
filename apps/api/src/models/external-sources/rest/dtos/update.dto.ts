import { PartialType } from '@nestjs/swagger'
import { ExternalSource } from 'prisma/generated/prisma/client'
import { CreateExternalSource } from './create.dto'

export class UpdateExternalSource extends PartialType(CreateExternalSource) {
  id: ExternalSource['id']
}
