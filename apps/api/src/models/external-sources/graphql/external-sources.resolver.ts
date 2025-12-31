import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { AllowAuthenticated } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateExternalSourceInput } from './dtos/create-external-source.input'
import {
  FindManyExternalSourceArgs,
  FindUniqueExternalSourceArgs,
} from './dtos/find.args'
import { UpdateExternalSourceInput } from './dtos/update-external-source.input'
import { ExternalSource } from './entity/external-source.entity'
import { ExternalSourcesService } from './external-sources.service'

@Resolver(() => ExternalSource)
export class ExternalSourcesResolver {
  constructor(
    private readonly externalSourcesService: ExternalSourcesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => ExternalSource)
  createExternalSource(
    @Args('createExternalSourceInput') args: CreateExternalSourceInput,
  ) {
    return this.externalSourcesService.create(args)
  }

  @Query(() => [ExternalSource], { name: 'externalSources' })
  findAll(@Args() args: FindManyExternalSourceArgs) {
    return this.externalSourcesService.findAll(args)
  }

  @Query(() => ExternalSource, { name: 'externalSource' })
  findOne(@Args() args: FindUniqueExternalSourceArgs) {
    return this.externalSourcesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => ExternalSource)
  async updateExternalSource(
    @Args('updateExternalSourceInput') args: UpdateExternalSourceInput,
  ) {
    return this.externalSourcesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => ExternalSource)
  async removeExternalSource(@Args() args: FindUniqueExternalSourceArgs) {
    return this.externalSourcesService.remove(args)
  }
}
