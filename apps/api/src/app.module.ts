import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { JwtModule } from '@nestjs/jwt'
import { join } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './common/prisma/prisma.module'
import { AdminsModule } from './models/admins/admins.module'
import { AlbumVersionsModule } from './models/album-versions/album-versions.module'
import { AlbumsModule } from './models/albums/albums.module'
import { CollectionItemsModule } from './models/collection-items/collection-items.module'
import { ExternalSourcesModule } from './models/external-sources/external-sources.module'
import { GroupMusiciansModule } from './models/group-musicians/group-musicians.module'
import { GroupStylesModule } from './models/group-styles/group-styles.module'
import { GroupsModule } from './models/groups/groups.module'
import { InstrumentsModule } from './models/instruments/instruments.module'
import { MembersModule } from './models/members/members.module'
import { MusicStylesModule } from './models/music-styles/music-styles.module'
import { PurchaseInfosModule } from './models/purchase-infos/purchase-infos.module'
import { TracksModule } from './models/tracks/tracks.module'
import { UsersModule } from './models/users/users.module'
import { GroupMusicianInstrumentsModule } from './models/group-musician-instruments/group-musician-instruments.module'

// TODO: Move this to util lib
const MAX_AGE = 24 * 60 * 60

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: MAX_AGE },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      introspection: true,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
    }),
    PrismaModule,
    UsersModule,
    AdminsModule,
    MembersModule,
    MusicStylesModule,
    GroupsModule,
    GroupStylesModule,
    GroupMusiciansModule,
    InstrumentsModule,
    GroupMusicianInstrumentsModule,
    AlbumsModule,
    TracksModule,
    AlbumVersionsModule,
    CollectionItemsModule,
    PurchaseInfosModule,
    ExternalSourcesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
