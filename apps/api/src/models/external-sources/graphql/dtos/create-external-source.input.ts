import { InputType, OmitType } from '@nestjs/graphql'
import { ExternalSource } from '../entity/external-source.entity'

@InputType()
export class CreateExternalSourceInput extends OmitType(
  ExternalSource,
  ['id', 'createdAt', 'updatedAt'],
  InputType,
) {}
