import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from 'prisma/generated/prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class GroupStyleQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.GroupStyleScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.GroupStyleScalarFieldEnum))
  searchBy?: string
}
