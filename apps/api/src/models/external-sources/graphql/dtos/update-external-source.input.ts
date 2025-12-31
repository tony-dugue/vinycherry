import { InputType, PartialType } from '@nestjs/graphql'
import { ExternalSource } from 'prisma/generated/prisma/client'
import { CreateExternalSourceInput } from './create-external-source.input'

@InputType()
export class UpdateExternalSourceInput extends PartialType(
  CreateExternalSourceInput,
) {
  id: ExternalSource['id']
}
