import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from 'prisma/generated/prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class GroupMusicianInstrumentQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.GroupMusicianInstrumentScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.GroupMusicianInstrumentScalarFieldEnum))
  searchBy?: string
}
