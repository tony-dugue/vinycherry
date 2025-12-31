import { InputType, PartialType } from '@nestjs/graphql'
import { AlbumVersion } from 'prisma/generated/prisma/client'
import { CreateAlbumVersionInput } from './create-album-version.input'

@InputType()
export class UpdateAlbumVersionInput extends PartialType(
  CreateAlbumVersionInput,
) {
  id: AlbumVersion['id']
}
