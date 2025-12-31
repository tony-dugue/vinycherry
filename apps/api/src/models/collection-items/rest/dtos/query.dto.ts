import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from 'prisma/generated/prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class CollectionItemQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.CollectionItemScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.CollectionItemScalarFieldEnum))
  searchBy?: string
}
