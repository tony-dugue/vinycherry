import { InputType, OmitType } from '@nestjs/graphql'
import { AlbumVersion } from '../entity/album-version.entity'

@InputType()
export class CreateAlbumVersionInput extends OmitType(
  AlbumVersion,
  ['id', 'createdAt', 'updatedAt'],
  InputType,
) {}
