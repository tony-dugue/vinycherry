import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from 'prisma/generated/prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class ExternalSourceQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.ExternalSourceScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.ExternalSourceScalarFieldEnum))
  searchBy?: string
}
