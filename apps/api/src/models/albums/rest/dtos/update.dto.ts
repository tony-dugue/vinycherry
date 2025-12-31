import { PartialType } from '@nestjs/swagger'
import { Album } from 'prisma/generated/prisma/client'
import { CreateAlbum } from './create.dto'

export class UpdateAlbum extends PartialType(CreateAlbum) {
  id: Album['id']
}
