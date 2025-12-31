import { OmitType } from '@nestjs/swagger'
import { ExternalSourceEntity } from '../entity/external-source.entity'

export class CreateExternalSource extends OmitType(ExternalSourceEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
