import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from 'prisma/generated/prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class AlbumQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.AlbumScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.AlbumScalarFieldEnum))
  searchBy?: string
}
