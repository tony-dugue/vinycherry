import { InputType, OmitType } from '@nestjs/graphql'
import { Album } from '../entity/album.entity'

@InputType()
export class CreateAlbumInput extends OmitType(
  Album,
  ['id', 'createdAt', 'updatedAt'],
  InputType,
) {}
