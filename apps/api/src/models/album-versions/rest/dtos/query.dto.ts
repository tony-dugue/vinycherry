import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from 'prisma/generated/prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class AlbumVersionQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.AlbumVersionScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.AlbumVersionScalarFieldEnum))
  searchBy?: string
}
