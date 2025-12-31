import { PartialType } from '@nestjs/swagger'
import { AlbumVersion } from 'prisma/generated/prisma/client'
import { CreateAlbumVersion } from './create.dto'

export class UpdateAlbumVersion extends PartialType(CreateAlbumVersion) {
  id: AlbumVersion['id']
}
