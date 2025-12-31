import { OmitType } from '@nestjs/swagger'
import { AlbumVersionEntity } from '../entity/album-version.entity'

export class CreateAlbumVersion extends OmitType(AlbumVersionEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
