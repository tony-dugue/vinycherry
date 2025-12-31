import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from 'prisma/generated/prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class GroupMusicianQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.GroupMusicianScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.GroupMusicianScalarFieldEnum))
  searchBy?: string
}
