import { OmitType } from '@nestjs/swagger'
import { AlbumEntity } from '../entity/album.entity'

export class CreateAlbum extends OmitType(AlbumEntity, []) {}
