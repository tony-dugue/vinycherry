import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from 'prisma/generated/prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class TrackQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.TrackScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.TrackScalarFieldEnum))
  searchBy?: string
}
