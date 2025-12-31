import { InputType, PartialType } from '@nestjs/graphql'
import { Album } from 'prisma/generated/prisma/client'
import { CreateAlbumInput } from './create-album.input'

@InputType()
export class UpdateAlbumInput extends PartialType(CreateAlbumInput) {
  id: Album['id']
}
