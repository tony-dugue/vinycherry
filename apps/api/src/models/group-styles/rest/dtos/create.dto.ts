import { OmitType } from '@nestjs/swagger'
import { GroupStyleEntity } from '../entity/group-style.entity'

export class CreateGroupStyle extends OmitType(GroupStyleEntity, []) {}
