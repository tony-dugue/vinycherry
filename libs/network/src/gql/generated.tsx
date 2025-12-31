import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
}

export type Admin = {
  __typename?: 'Admin'
  createdAt: Scalars['DateTime']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user?: Maybe<User>
}

export type AdminOrderByWithRelationInput = {
  User?: InputMaybe<UserOrderByWithRelationInput>
  createdAt?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum AdminScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>
  NOT?: InputMaybe<Array<AdminWhereInput>>
  OR?: InputMaybe<Array<AdminWhereInput>>
  User?: InputMaybe<UserRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type AdminWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type Album = {
  __typename?: 'Album'
  coverUrl?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  group: Group
  groupId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  releaseDate?: Maybe<Scalars['DateTime']['output']>
  sources: Array<ExternalSource>
  studio?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
  tracks: Array<Track>
  updatedAt: Scalars['DateTime']['output']
  versions: Array<AlbumVersion>
}

export type AlbumListRelationFilter = {
  every?: InputMaybe<AlbumWhereInput>
  none?: InputMaybe<AlbumWhereInput>
  some?: InputMaybe<AlbumWhereInput>
}

export type AlbumOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type AlbumOrderByWithRelationInput = {
  Group?: InputMaybe<GroupOrderByWithRelationInput>
  Sources?: InputMaybe<ExternalSourceOrderByRelationAggregateInput>
  Tracks?: InputMaybe<TrackOrderByRelationAggregateInput>
  Versions?: InputMaybe<AlbumVersionOrderByRelationAggregateInput>
  coverUrl?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  groupId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  releaseDate?: InputMaybe<SortOrder>
  studio?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type AlbumRelationFilter = {
  is?: InputMaybe<AlbumWhereInput>
  isNot?: InputMaybe<AlbumWhereInput>
}

export enum AlbumScalarFieldEnum {
  CoverUrl = 'coverUrl',
  CreatedAt = 'createdAt',
  GroupId = 'groupId',
  Id = 'id',
  ReleaseDate = 'releaseDate',
  Studio = 'studio',
  Title = 'title',
  UpdatedAt = 'updatedAt',
}

export type AlbumVersion = {
  __typename?: 'AlbumVersion'
  album: Album
  albumId: Scalars['Int']['output']
  collectionItems: Array<CollectionItem>
  createdAt: Scalars['DateTime']['output']
  format: SupportType
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  year?: Maybe<Scalars['Int']['output']>
}

export type AlbumVersionListRelationFilter = {
  every?: InputMaybe<AlbumVersionWhereInput>
  none?: InputMaybe<AlbumVersionWhereInput>
  some?: InputMaybe<AlbumVersionWhereInput>
}

export type AlbumVersionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type AlbumVersionOrderByWithRelationInput = {
  Album?: InputMaybe<AlbumOrderByWithRelationInput>
  CollectionItems?: InputMaybe<CollectionItemOrderByRelationAggregateInput>
  albumId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  format?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  year?: InputMaybe<SortOrder>
}

export type AlbumVersionRelationFilter = {
  is?: InputMaybe<AlbumVersionWhereInput>
  isNot?: InputMaybe<AlbumVersionWhereInput>
}

export enum AlbumVersionScalarFieldEnum {
  AlbumId = 'albumId',
  CreatedAt = 'createdAt',
  Format = 'format',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  Year = 'year',
}

export type AlbumVersionWhereInput = {
  AND?: InputMaybe<Array<AlbumVersionWhereInput>>
  Album?: InputMaybe<AlbumRelationFilter>
  CollectionItems?: InputMaybe<CollectionItemListRelationFilter>
  NOT?: InputMaybe<Array<AlbumVersionWhereInput>>
  OR?: InputMaybe<Array<AlbumVersionWhereInput>>
  albumId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  format?: InputMaybe<SupportType>
  id?: InputMaybe<IntFilter>
  name?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  year?: InputMaybe<IntFilter>
}

export type AlbumVersionWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type AlbumWhereInput = {
  AND?: InputMaybe<Array<AlbumWhereInput>>
  Group?: InputMaybe<GroupRelationFilter>
  NOT?: InputMaybe<Array<AlbumWhereInput>>
  OR?: InputMaybe<Array<AlbumWhereInput>>
  Sources?: InputMaybe<ExternalSourceListRelationFilter>
  Tracks?: InputMaybe<TrackListRelationFilter>
  Versions?: InputMaybe<AlbumVersionListRelationFilter>
  coverUrl?: InputMaybe<DateTimeFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  groupId?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  releaseDate?: InputMaybe<DateTimeFilter>
  studio?: InputMaybe<DateTimeFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type AlbumWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type AuthProvider = {
  __typename?: 'AuthProvider'
  type: AuthProviderType
  uid: Scalars['String']['output']
}

export enum AuthProviderType {
  Credentials = 'CREDENTIALS',
}

export type CollectionItem = {
  __typename?: 'CollectionItem'
  albumVersion: AlbumVersion
  albumVersionId: Scalars['Int']['output']
  condition: Condition
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  member: Member
  memberId: Scalars['String']['output']
  notes?: Maybe<Scalars['String']['output']>
  purchase?: Maybe<PurchaseInfo>
  updatedAt: Scalars['DateTime']['output']
}

export type CollectionItemListRelationFilter = {
  every?: InputMaybe<CollectionItemWhereInput>
  none?: InputMaybe<CollectionItemWhereInput>
  some?: InputMaybe<CollectionItemWhereInput>
}

export type CollectionItemOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type CollectionItemOrderByWithRelationInput = {
  AlbumVersion?: InputMaybe<AlbumVersionOrderByWithRelationInput>
  Member?: InputMaybe<MemberOrderByWithRelationInput>
  Purchase?: InputMaybe<PurchaseInfoOrderByWithRelationInput>
  albumVersionId?: InputMaybe<SortOrder>
  condition?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  memberId?: InputMaybe<SortOrder>
  notes?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type CollectionItemRelationFilter = {
  is?: InputMaybe<CollectionItemWhereInput>
  isNot?: InputMaybe<CollectionItemWhereInput>
}

export enum CollectionItemScalarFieldEnum {
  AlbumVersionId = 'albumVersionId',
  Condition = 'condition',
  CreatedAt = 'createdAt',
  Id = 'id',
  MemberId = 'memberId',
  Notes = 'notes',
  UpdatedAt = 'updatedAt',
}

export type CollectionItemWhereInput = {
  AND?: InputMaybe<Array<CollectionItemWhereInput>>
  AlbumVersion?: InputMaybe<AlbumVersionRelationFilter>
  Member?: InputMaybe<MemberRelationFilter>
  NOT?: InputMaybe<Array<CollectionItemWhereInput>>
  OR?: InputMaybe<Array<CollectionItemWhereInput>>
  Purchase?: InputMaybe<PurchaseInfoRelationFilter>
  albumVersionId?: InputMaybe<IntFilter>
  condition?: InputMaybe<Condition>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  memberId?: InputMaybe<StringFilter>
  notes?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type CollectionItemWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export enum Condition {
  Fair = 'FAIR',
  Good = 'GOOD',
  Mint = 'MINT',
  Poor = 'POOR',
  VeryGood = 'VERY_GOOD',
}

export type CreateAdminInput = {
  uid: Scalars['String']['input']
}

export type CreateAlbumInput = {
  coverUrl?: InputMaybe<Scalars['String']['input']>
  groupId: Scalars['Int']['input']
  releaseDate?: InputMaybe<Scalars['DateTime']['input']>
  studio?: InputMaybe<Scalars['String']['input']>
  title: Scalars['String']['input']
}

export type CreateAlbumVersionInput = {
  albumId: Scalars['Int']['input']
  format: SupportType
  name: Scalars['String']['input']
  year?: InputMaybe<Scalars['Int']['input']>
}

export type CreateCollectionItemInput = {
  albumVersionId: Scalars['Int']['input']
  condition: Condition
  memberId: Scalars['String']['input']
  notes?: InputMaybe<Scalars['String']['input']>
}

export type CreateExternalSourceInput = {
  albumId?: InputMaybe<Scalars['Int']['input']>
  externalId: Scalars['String']['input']
  source: ExternalSourceType
}

export type CreateGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
}

export type CreateGroupMusicianInput = {
  endYear?: InputMaybe<Scalars['Int']['input']>
  groupId: Scalars['Int']['input']
  name: Scalars['String']['input']
  role: Scalars['String']['input']
  startYear?: InputMaybe<Scalars['Int']['input']>
}

export type CreateGroupMusicianInstrumentInput = {
  groupMusicianId: Scalars['Int']['input']
  instrumentId: Scalars['Int']['input']
}

export type CreateGroupStyleInput = {
  groupId: Scalars['Int']['input']
  styleId: Scalars['Int']['input']
}

export type CreateInstrumentInput = {
  name: Scalars['String']['input']
}

export type CreateMemberInput = {
  displayName?: InputMaybe<Scalars['String']['input']>
  uid: Scalars['String']['input']
}

export type CreateMusicStyleInput = {
  name: Scalars['String']['input']
}

export type CreatePurchaseInfoInput = {
  collectionItemId: Scalars['Int']['input']
  date?: InputMaybe<Scalars['DateTime']['input']>
  place?: InputMaybe<Scalars['String']['input']>
  price?: InputMaybe<Scalars['Int']['input']>
}

export type CreateTrackInput = {
  albumId: Scalars['Int']['input']
  duration?: InputMaybe<Scalars['Int']['input']>
  position: Scalars['Int']['input']
  title: Scalars['String']['input']
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

export type ExternalSource = {
  __typename?: 'ExternalSource'
  album?: Maybe<Album>
  albumId?: Maybe<Scalars['Int']['output']>
  createdAt: Scalars['DateTime']['output']
  externalId: Scalars['String']['output']
  id: Scalars['Int']['output']
  source: ExternalSourceType
  updatedAt: Scalars['DateTime']['output']
}

export type ExternalSourceListRelationFilter = {
  every?: InputMaybe<ExternalSourceWhereInput>
  none?: InputMaybe<ExternalSourceWhereInput>
  some?: InputMaybe<ExternalSourceWhereInput>
}

export type ExternalSourceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ExternalSourceOrderByWithRelationInput = {
  Album?: InputMaybe<AlbumOrderByWithRelationInput>
  albumId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  externalId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  source?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ExternalSourceScalarFieldEnum {
  AlbumId = 'albumId',
  CreatedAt = 'createdAt',
  ExternalId = 'externalId',
  Id = 'id',
  Source = 'source',
  UpdatedAt = 'updatedAt',
}

export enum ExternalSourceType {
  AudioDb = 'AUDIO_DB',
  Discogs = 'DISCOGS',
  Musicbrainz = 'MUSICBRAINZ',
  Spotify = 'SPOTIFY',
}

export type ExternalSourceWhereInput = {
  AND?: InputMaybe<Array<ExternalSourceWhereInput>>
  Album?: InputMaybe<AlbumRelationFilter>
  NOT?: InputMaybe<Array<ExternalSourceWhereInput>>
  OR?: InputMaybe<Array<ExternalSourceWhereInput>>
  albumId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  externalId?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  source?: InputMaybe<ExternalSourceType>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ExternalSourceWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<Scalars['Int']['input']>
}

export type Group = {
  __typename?: 'Group'
  albums: Array<Album>
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  image?: Maybe<Scalars['String']['output']>
  musicians: Array<GroupMusician>
  name: Scalars['String']['output']
  styles: Array<GroupStyle>
  updatedAt: Scalars['DateTime']['output']
}

export type GroupMusician = {
  __typename?: 'GroupMusician'
  createdAt: Scalars['DateTime']['output']
  endYear?: Maybe<Scalars['Int']['output']>
  group: Group
  groupId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  instruments: Array<GroupMusicianInstrument>
  name: Scalars['String']['output']
  role: Scalars['String']['output']
  startYear?: Maybe<Scalars['Int']['output']>
  updatedAt: Scalars['DateTime']['output']
}

export type GroupMusicianInstrument = {
  __typename?: 'GroupMusicianInstrument'
  groupMusician: GroupMusician
  groupMusicianId: Scalars['Int']['output']
  instrument: Instrument
  instrumentId: Scalars['Int']['output']
}

export type GroupMusicianInstrumentCompoundUniqueInput = {
  groupMusicianId: Scalars['Int']['input']
  instrumentId: Scalars['Int']['input']
}

export type GroupMusicianInstrumentListRelationFilter = {
  every?: InputMaybe<GroupMusicianInstrumentWhereInput>
  none?: InputMaybe<GroupMusicianInstrumentWhereInput>
  some?: InputMaybe<GroupMusicianInstrumentWhereInput>
}

export type GroupMusicianInstrumentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type GroupMusicianInstrumentOrderByWithRelationInput = {
  GroupMusician?: InputMaybe<GroupMusicianOrderByWithRelationInput>
  Instrument?: InputMaybe<InstrumentOrderByWithRelationInput>
  groupMusicianId?: InputMaybe<SortOrder>
  instrumentId?: InputMaybe<SortOrder>
}

export enum GroupMusicianInstrumentScalarFieldEnum {
  GroupMusicianId = 'groupMusicianId',
  InstrumentId = 'instrumentId',
}

export type GroupMusicianInstrumentWhereInput = {
  AND?: InputMaybe<Array<GroupMusicianInstrumentWhereInput>>
  GroupMusician?: InputMaybe<GroupMusicianRelationFilter>
  Instrument?: InputMaybe<InstrumentRelationFilter>
  NOT?: InputMaybe<Array<GroupMusicianInstrumentWhereInput>>
  OR?: InputMaybe<Array<GroupMusicianInstrumentWhereInput>>
  groupMusicianId?: InputMaybe<IntFilter>
  instrumentId?: InputMaybe<IntFilter>
}

export type GroupMusicianInstrumentWhereUniqueInput = {
  groupMusicianId_instrumentId: GroupMusicianInstrumentCompoundUniqueInput
}

export type GroupMusicianListRelationFilter = {
  every?: InputMaybe<GroupMusicianWhereInput>
  none?: InputMaybe<GroupMusicianWhereInput>
  some?: InputMaybe<GroupMusicianWhereInput>
}

export type GroupMusicianOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type GroupMusicianOrderByWithRelationInput = {
  Group?: InputMaybe<GroupOrderByWithRelationInput>
  Instruments?: InputMaybe<GroupMusicianInstrumentOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  endYear?: InputMaybe<SortOrder>
  groupId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  role?: InputMaybe<SortOrder>
  startYear?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type GroupMusicianRelationFilter = {
  is?: InputMaybe<GroupMusicianWhereInput>
  isNot?: InputMaybe<GroupMusicianWhereInput>
}

export enum GroupMusicianScalarFieldEnum {
  CreatedAt = 'createdAt',
  EndYear = 'endYear',
  GroupId = 'groupId',
  Id = 'id',
  Name = 'name',
  Role = 'role',
  StartYear = 'startYear',
  UpdatedAt = 'updatedAt',
}

export type GroupMusicianWhereInput = {
  AND?: InputMaybe<Array<GroupMusicianWhereInput>>
  Group?: InputMaybe<GroupRelationFilter>
  Instruments?: InputMaybe<GroupMusicianInstrumentListRelationFilter>
  NOT?: InputMaybe<Array<GroupMusicianWhereInput>>
  OR?: InputMaybe<Array<GroupMusicianWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  endYear?: InputMaybe<IntFilter>
  groupId?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  name?: InputMaybe<StringFilter>
  role?: InputMaybe<StringFilter>
  startYear?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type GroupMusicianWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type GroupOrderByWithRelationInput = {
  Albums?: InputMaybe<AlbumOrderByRelationAggregateInput>
  Musicians?: InputMaybe<GroupMusicianOrderByRelationAggregateInput>
  Styles?: InputMaybe<GroupStyleOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  image?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type GroupRelationFilter = {
  is?: InputMaybe<GroupWhereInput>
  isNot?: InputMaybe<GroupWhereInput>
}

export enum GroupScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type GroupStyle = {
  __typename?: 'GroupStyle'
  group: Group
  groupId: Scalars['Int']['output']
  musicStyle: MusicStyle
  styleId: Scalars['Int']['output']
}

export type GroupStyleGroupIdStyleIdCompoundUniqueInput = {
  groupId: Scalars['Int']['input']
  styleId: Scalars['Int']['input']
}

export type GroupStyleListRelationFilter = {
  every?: InputMaybe<GroupStyleWhereInput>
  none?: InputMaybe<GroupStyleWhereInput>
  some?: InputMaybe<GroupStyleWhereInput>
}

export type GroupStyleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type GroupStyleOrderByWithRelationInput = {
  Group?: InputMaybe<GroupOrderByWithRelationInput>
  MusicStyle?: InputMaybe<MusicStyleOrderByWithRelationInput>
  groupId?: InputMaybe<SortOrder>
  styleId?: InputMaybe<SortOrder>
}

export enum GroupStyleScalarFieldEnum {
  GroupId = 'groupId',
  StyleId = 'styleId',
}

export type GroupStyleWhereInput = {
  AND?: InputMaybe<Array<GroupStyleWhereInput>>
  Group?: InputMaybe<GroupRelationFilter>
  MusicStyle?: InputMaybe<MusicStyleRelationFilter>
  NOT?: InputMaybe<Array<GroupStyleWhereInput>>
  OR?: InputMaybe<Array<GroupStyleWhereInput>>
  groupId?: InputMaybe<IntFilter>
  styleId?: InputMaybe<IntFilter>
}

export type GroupStyleWhereUniqueInput = {
  groupId_styleId: GroupStyleGroupIdStyleIdCompoundUniqueInput
}

export type GroupWhereInput = {
  AND?: InputMaybe<Array<GroupWhereInput>>
  Albums?: InputMaybe<AlbumListRelationFilter>
  Musicians?: InputMaybe<GroupMusicianListRelationFilter>
  NOT?: InputMaybe<Array<GroupWhereInput>>
  OR?: InputMaybe<Array<GroupWhereInput>>
  Styles?: InputMaybe<GroupStyleListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  description?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  image?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type GroupWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type Instrument = {
  __typename?: 'Instrument'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  musicians: Array<GroupMusicianInstrument>
  name: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type InstrumentOrderByWithRelationInput = {
  Musicians?: InputMaybe<GroupMusicianInstrumentOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type InstrumentRelationFilter = {
  is?: InputMaybe<InstrumentWhereInput>
  isNot?: InputMaybe<InstrumentWhereInput>
}

export enum InstrumentScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type InstrumentWhereInput = {
  AND?: InputMaybe<Array<InstrumentWhereInput>>
  Musicians?: InputMaybe<GroupMusicianInstrumentListRelationFilter>
  NOT?: InputMaybe<Array<InstrumentWhereInput>>
  OR?: InputMaybe<Array<InstrumentWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  name?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type InstrumentWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
}

export type LoginInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type LoginOutput = {
  __typename?: 'LoginOutput'
  token: Scalars['String']['output']
  user: User
}

export type Member = {
  __typename?: 'Member'
  collectionItems: Array<CollectionItem>
  createdAt: Scalars['DateTime']['output']
  displayName?: Maybe<Scalars['String']['output']>
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user?: Maybe<User>
}

export type MemberOrderByWithRelationInput = {
  CollectionItems?: InputMaybe<CollectionItemOrderByRelationAggregateInput>
  User?: InputMaybe<UserOrderByWithRelationInput>
  createdAt?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type MemberRelationFilter = {
  is?: InputMaybe<MemberWhereInput>
  isNot?: InputMaybe<MemberWhereInput>
}

export enum MemberScalarFieldEnum {
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type MemberWhereInput = {
  AND?: InputMaybe<Array<MemberWhereInput>>
  CollectionItems?: InputMaybe<CollectionItemListRelationFilter>
  NOT?: InputMaybe<Array<MemberWhereInput>>
  OR?: InputMaybe<Array<MemberWhereInput>>
  User?: InputMaybe<UserRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  displayName?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type MemberWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type MusicStyle = {
  __typename?: 'MusicStyle'
  createdAt: Scalars['DateTime']['output']
  groupStyles: Array<GroupStyle>
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type MusicStyleOrderByWithRelationInput = {
  Groups?: InputMaybe<GroupStyleOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type MusicStyleRelationFilter = {
  is?: InputMaybe<MusicStyleWhereInput>
  isNot?: InputMaybe<MusicStyleWhereInput>
}

export enum MusicStyleScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type MusicStyleWhereInput = {
  AND?: InputMaybe<Array<MusicStyleWhereInput>>
  Groups?: InputMaybe<GroupStyleListRelationFilter>
  NOT?: InputMaybe<Array<MusicStyleWhereInput>>
  OR?: InputMaybe<Array<MusicStyleWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  name?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type MusicStyleWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type Mutation = {
  __typename?: 'Mutation'
  createAdmin: Admin
  createAlbum: Album
  createAlbumVersion: AlbumVersion
  createCollectionItem: CollectionItem
  createExternalSource: ExternalSource
  createGroup: Group
  createGroupMusician: GroupMusician
  createGroupMusicianInstrument: GroupMusicianInstrument
  createGroupStyle: GroupStyle
  createInstrument: Instrument
  createMember: Member
  createMusicStyle: MusicStyle
  createPurchaseInfo: PurchaseInfo
  createTrack: Track
  login: LoginOutput
  registerWithCredentials: User
  removeAdmin: Admin
  removeAlbum: Album
  removeAlbumVersion: AlbumVersion
  removeCollectionItem: CollectionItem
  removeExternalSource: ExternalSource
  removeGroup: Group
  removeGroupMusician: GroupMusician
  removeGroupMusicianInstrument: GroupMusicianInstrument
  removeGroupStyle: GroupStyle
  removeInstrument: Instrument
  removeMember: Member
  removeMusicStyle: MusicStyle
  removePurchaseInfo: PurchaseInfo
  removeTrack: Track
  removeUser: User
  updateAdmin: Admin
  updateAlbum: Album
  updateAlbumVersion: AlbumVersion
  updateCollectionItem: CollectionItem
  updateExternalSource: ExternalSource
  updateGroup: Group
  updateGroupMusician: GroupMusician
  updateGroupMusicianInstrument: GroupMusicianInstrument
  updateGroupStyle: GroupStyle
  updateInstrument: Instrument
  updateMember: Member
  updateMusicStyle: MusicStyle
  updatePurchaseInfo: PurchaseInfo
  updateTrack: Track
  updateUser: User
}

export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput
}

export type MutationCreateAlbumArgs = {
  createAlbumInput: CreateAlbumInput
}

export type MutationCreateAlbumVersionArgs = {
  createAlbumVersionInput: CreateAlbumVersionInput
}

export type MutationCreateCollectionItemArgs = {
  createCollectionItemInput: CreateCollectionItemInput
}

export type MutationCreateExternalSourceArgs = {
  createExternalSourceInput: CreateExternalSourceInput
}

export type MutationCreateGroupArgs = {
  createGroupInput: CreateGroupInput
}

export type MutationCreateGroupMusicianArgs = {
  createGroupMusicianInput: CreateGroupMusicianInput
}

export type MutationCreateGroupMusicianInstrumentArgs = {
  createGroupMusicianInstrumentInput: CreateGroupMusicianInstrumentInput
}

export type MutationCreateGroupStyleArgs = {
  createGroupStyleInput: CreateGroupStyleInput
}

export type MutationCreateInstrumentArgs = {
  createInstrumentInput: CreateInstrumentInput
}

export type MutationCreateMemberArgs = {
  createMemberInput: CreateMemberInput
}

export type MutationCreateMusicStyleArgs = {
  createMusicStyleInput: CreateMusicStyleInput
}

export type MutationCreatePurchaseInfoArgs = {
  createPurchaseInfoInput: CreatePurchaseInfoInput
}

export type MutationCreateTrackArgs = {
  createTrackInput: CreateTrackInput
}

export type MutationLoginArgs = {
  loginInput: LoginInput
}

export type MutationRegisterWithCredentialsArgs = {
  registerWithCredentialsInput: RegisterWithCredentialsInput
}

export type MutationRemoveAdminArgs = {
  where: AdminWhereUniqueInput
}

export type MutationRemoveAlbumArgs = {
  where: AlbumWhereUniqueInput
}

export type MutationRemoveAlbumVersionArgs = {
  where: AlbumVersionWhereUniqueInput
}

export type MutationRemoveCollectionItemArgs = {
  where: CollectionItemWhereUniqueInput
}

export type MutationRemoveExternalSourceArgs = {
  where: ExternalSourceWhereUniqueInput
}

export type MutationRemoveGroupArgs = {
  where: GroupWhereUniqueInput
}

export type MutationRemoveGroupMusicianArgs = {
  where: GroupMusicianWhereUniqueInput
}

export type MutationRemoveGroupMusicianInstrumentArgs = {
  where: GroupMusicianInstrumentWhereUniqueInput
}

export type MutationRemoveGroupStyleArgs = {
  where: GroupStyleWhereUniqueInput
}

export type MutationRemoveInstrumentArgs = {
  where: InstrumentWhereUniqueInput
}

export type MutationRemoveMemberArgs = {
  where: MemberWhereUniqueInput
}

export type MutationRemoveMusicStyleArgs = {
  where: MusicStyleWhereUniqueInput
}

export type MutationRemovePurchaseInfoArgs = {
  where: PurchaseInfoWhereUniqueInput
}

export type MutationRemoveTrackArgs = {
  where: TrackWhereUniqueInput
}

export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput
}

export type MutationUpdateAdminArgs = {
  updateAdminInput: UpdateAdminInput
}

export type MutationUpdateAlbumArgs = {
  updateAlbumInput: UpdateAlbumInput
}

export type MutationUpdateAlbumVersionArgs = {
  updateAlbumVersionInput: UpdateAlbumVersionInput
}

export type MutationUpdateCollectionItemArgs = {
  updateCollectionItemInput: UpdateCollectionItemInput
}

export type MutationUpdateExternalSourceArgs = {
  updateExternalSourceInput: UpdateExternalSourceInput
}

export type MutationUpdateGroupArgs = {
  updateGroupInput: UpdateGroupInput
}

export type MutationUpdateGroupMusicianArgs = {
  updateGroupMusicianInput: UpdateGroupMusicianInput
}

export type MutationUpdateGroupMusicianInstrumentArgs = {
  updateGroupMusicianInstrumentInput: UpdateGroupMusicianInstrumentInput
}

export type MutationUpdateGroupStyleArgs = {
  updateGroupStyleInput: UpdateGroupStyleInput
}

export type MutationUpdateInstrumentArgs = {
  updateInstrumentInput: UpdateInstrumentInput
}

export type MutationUpdateMemberArgs = {
  updateMemberInput: UpdateMemberInput
}

export type MutationUpdateMusicStyleArgs = {
  updateMusicStyleInput: UpdateMusicStyleInput
}

export type MutationUpdatePurchaseInfoArgs = {
  updatePurchaseInfoInput: UpdatePurchaseInfoInput
}

export type MutationUpdateTrackArgs = {
  updateTrackInput: UpdateTrackInput
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

export type PurchaseInfo = {
  __typename?: 'PurchaseInfo'
  collectionItem: CollectionItem
  collectionItemId: Scalars['Int']['output']
  createdAt: Scalars['DateTime']['output']
  date?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['Int']['output']
  place?: Maybe<Scalars['String']['output']>
  price?: Maybe<Scalars['Int']['output']>
  updatedAt: Scalars['DateTime']['output']
}

export type PurchaseInfoOrderByWithRelationInput = {
  CollectionItem?: InputMaybe<CollectionItemOrderByWithRelationInput>
  collectionItemId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  date?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  place?: InputMaybe<SortOrder>
  price?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type PurchaseInfoRelationFilter = {
  is?: InputMaybe<PurchaseInfoWhereInput>
  isNot?: InputMaybe<PurchaseInfoWhereInput>
}

export enum PurchaseInfoScalarFieldEnum {
  CollectionItemId = 'collectionItemId',
  CreatedAt = 'createdAt',
  Date = 'date',
  Id = 'id',
  Place = 'place',
  Price = 'price',
  UpdatedAt = 'updatedAt',
}

export type PurchaseInfoWhereInput = {
  AND?: InputMaybe<Array<PurchaseInfoWhereInput>>
  CollectionItem?: InputMaybe<CollectionItemRelationFilter>
  NOT?: InputMaybe<Array<PurchaseInfoWhereInput>>
  OR?: InputMaybe<Array<PurchaseInfoWhereInput>>
  collectionItemId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  date?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  place?: InputMaybe<StringFilter>
  price?: InputMaybe<FloatFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type PurchaseInfoWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type Query = {
  __typename?: 'Query'
  admin: Admin
  admins: Array<Admin>
  album: Album
  albumVersion: AlbumVersion
  albumVersions: Array<AlbumVersion>
  albums: Array<Album>
  collectionItem: CollectionItem
  collectionItems: Array<CollectionItem>
  externalSource: ExternalSource
  externalSources: Array<ExternalSource>
  getAuthProvider?: Maybe<AuthProvider>
  group: Group
  groupMusician: GroupMusician
  groupMusicianInstrument: GroupMusicianInstrument
  groupMusicianInstruments: Array<GroupMusicianInstrument>
  groupMusicians: Array<GroupMusician>
  groupStyle: GroupStyle
  groupStyles: Array<GroupStyle>
  groups: Array<Group>
  instrument: Instrument
  instruments: Array<Instrument>
  member: Member
  members: Array<Member>
  musicStyle: MusicStyle
  musicStyles: Array<MusicStyle>
  purchaseInfo: PurchaseInfo
  purchaseInfos: Array<PurchaseInfo>
  track: Track
  tracks: Array<Track>
  user: User
  users: Array<User>
  whoami: User
}

export type QueryAdminArgs = {
  where: AdminWhereUniqueInput
}

export type QueryAdminsArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>
  distinct?: InputMaybe<Array<AdminScalarFieldEnum>>
  omit?: InputMaybe<Array<Scalars['String']['input']>>
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AdminWhereInput>
}

export type QueryAlbumArgs = {
  where: AlbumWhereUniqueInput
}

export type QueryAlbumVersionArgs = {
  where: AlbumVersionWhereUniqueInput
}

export type QueryAlbumVersionsArgs = {
  cursor?: InputMaybe<AlbumVersionWhereUniqueInput>
  distinct?: InputMaybe<Array<AlbumVersionScalarFieldEnum>>
  omit?: InputMaybe<Array<Scalars['String']['input']>>
  orderBy?: InputMaybe<Array<AlbumVersionOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AlbumVersionWhereInput>
}

export type QueryAlbumsArgs = {
  cursor?: InputMaybe<AlbumWhereUniqueInput>
  distinct?: InputMaybe<Array<AlbumScalarFieldEnum>>
  omit?: InputMaybe<Array<Scalars['String']['input']>>
  orderBy?: InputMaybe<Array<AlbumOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AlbumWhereInput>
}

export type QueryCollectionItemArgs = {
  where: CollectionItemWhereUniqueInput
}

export type QueryCollectionItemsArgs = {
  cursor?: InputMaybe<CollectionItemWhereUniqueInput>
  distinct?: InputMaybe<Array<CollectionItemScalarFieldEnum>>
  omit?: InputMaybe<Array<Scalars['String']['input']>>
  orderBy?: InputMaybe<Array<CollectionItemOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CollectionItemWhereInput>
}

export type QueryExternalSourceArgs = {
  where: ExternalSourceWhereUniqueInput
}

export type QueryExternalSourcesArgs = {
  cursor?: InputMaybe<ExternalSourceWhereUniqueInput>
  distinct?: InputMaybe<Array<ExternalSourceScalarFieldEnum>>
  omit?: InputMaybe<Array<Scalars['String']['input']>>
  orderBy?: InputMaybe<Array<ExternalSourceOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ExternalSourceWhereInput>
}

export type QueryGetAuthProviderArgs = {
  uid: Scalars['String']['input']
}

export type QueryGroupArgs = {
  where: GroupWhereUniqueInput
}

export type QueryGroupMusicianArgs = {
  where: GroupMusicianWhereUniqueInput
}

export type QueryGroupMusicianInstrumentArgs = {
  where: GroupMusicianInstrumentWhereUniqueInput
}

export type QueryGroupMusicianInstrumentsArgs = {
  cursor?: InputMaybe<GroupMusicianInstrumentWhereUniqueInput>
  distinct?: InputMaybe<Array<GroupMusicianInstrumentScalarFieldEnum>>
  omit?: InputMaybe<Array<Scalars['String']['input']>>
  orderBy?: InputMaybe<Array<GroupMusicianInstrumentOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<GroupMusicianInstrumentWhereInput>
}

export type QueryGroupMusiciansArgs = {
  cursor?: InputMaybe<GroupMusicianWhereUniqueInput>
  distinct?: InputMaybe<Array<GroupMusicianScalarFieldEnum>>
  omit?: InputMaybe<Array<Scalars['String']['input']>>
  orderBy?: InputMaybe<Array<GroupMusicianOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<GroupMusicianWhereInput>
}

export type QueryGroupStyleArgs = {
  where: GroupStyleWhereUniqueInput
}

export type QueryGroupStylesArgs = {
  cursor?: InputMaybe<GroupStyleWhereUniqueInput>
  distinct?: InputMaybe<Array<GroupStyleScalarFieldEnum>>
  omit?: InputMaybe<Array<Scalars['String']['input']>>
  orderBy?: InputMaybe<Array<GroupStyleOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<GroupStyleWhereInput>
}

export type QueryGroupsArgs = {
  cursor?: InputMaybe<GroupWhereUniqueInput>
  distinct?: InputMaybe<Array<GroupScalarFieldEnum>>
  omit?: InputMaybe<Array<Scalars['String']['input']>>
  orderBy?: InputMaybe<Array<GroupOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<GroupWhereInput>
}

export type QueryInstrumentArgs = {
  where: InstrumentWhereUniqueInput
}

export type QueryInstrumentsArgs = {
  cursor?: InputMaybe<InstrumentWhereUniqueInput>
  distinct?: InputMaybe<Array<InstrumentScalarFieldEnum>>
  omit?: InputMaybe<Array<Scalars['String']['input']>>
  orderBy?: InputMaybe<Array<InstrumentOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<InstrumentWhereInput>
}

export type QueryMemberArgs = {
  where: MemberWhereUniqueInput
}

export type QueryMembersArgs = {
  cursor?: InputMaybe<MemberWhereUniqueInput>
  distinct?: InputMaybe<Array<MemberScalarFieldEnum>>
  omit?: InputMaybe<Array<Scalars['String']['input']>>
  orderBy?: InputMaybe<Array<MemberOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<MemberWhereInput>
}

export type QueryMusicStyleArgs = {
  where: MusicStyleWhereUniqueInput
}

export type QueryMusicStylesArgs = {
  cursor?: InputMaybe<MusicStyleWhereUniqueInput>
  distinct?: InputMaybe<Array<MusicStyleScalarFieldEnum>>
  omit?: InputMaybe<Array<Scalars['String']['input']>>
  orderBy?: InputMaybe<Array<MusicStyleOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<MusicStyleWhereInput>
}

export type QueryPurchaseInfoArgs = {
  where: PurchaseInfoWhereUniqueInput
}

export type QueryPurchaseInfosArgs = {
  cursor?: InputMaybe<PurchaseInfoWhereUniqueInput>
  distinct?: InputMaybe<Array<PurchaseInfoScalarFieldEnum>>
  omit?: InputMaybe<Array<Scalars['String']['input']>>
  orderBy?: InputMaybe<Array<PurchaseInfoOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PurchaseInfoWhereInput>
}

export type QueryTrackArgs = {
  where: TrackWhereUniqueInput
}

export type QueryTracksArgs = {
  cursor?: InputMaybe<TrackWhereUniqueInput>
  distinct?: InputMaybe<Array<TrackScalarFieldEnum>>
  omit?: InputMaybe<Array<Scalars['String']['input']>>
  orderBy?: InputMaybe<Array<TrackOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TrackWhereInput>
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>
  omit?: InputMaybe<Array<Scalars['String']['input']>>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type RegisterWithCredentialsInput = {
  email: Scalars['String']['input']
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export enum SupportType {
  Box = 'BOX',
  Cassette = 'CASSETTE',
  Cd = 'CD',
  Digital = 'DIGITAL',
  Vinyl = 'VINYL',
}

export type Track = {
  __typename?: 'Track'
  album: Album
  albumId: Scalars['Int']['output']
  createdAt: Scalars['DateTime']['output']
  duration?: Maybe<Scalars['Int']['output']>
  id: Scalars['Int']['output']
  position: Scalars['Int']['output']
  title: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type TrackListRelationFilter = {
  every?: InputMaybe<TrackWhereInput>
  none?: InputMaybe<TrackWhereInput>
  some?: InputMaybe<TrackWhereInput>
}

export type TrackOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type TrackOrderByWithRelationInput = {
  Album?: InputMaybe<AlbumOrderByWithRelationInput>
  albumId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  duration?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  position?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum TrackScalarFieldEnum {
  AlbumId = 'albumId',
  CreatedAt = 'createdAt',
  Duration = 'duration',
  Id = 'id',
  Position = 'position',
  Title = 'title',
  UpdatedAt = 'updatedAt',
}

export type TrackWhereInput = {
  AND?: InputMaybe<Array<TrackWhereInput>>
  Album?: InputMaybe<AlbumRelationFilter>
  NOT?: InputMaybe<Array<TrackWhereInput>>
  OR?: InputMaybe<Array<TrackWhereInput>>
  albumId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  duration?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  position?: InputMaybe<IntFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type TrackWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type UpdateAdminInput = {
  uid: Scalars['String']['input']
}

export type UpdateAlbumInput = {
  coverUrl?: InputMaybe<Scalars['String']['input']>
  groupId?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  releaseDate?: InputMaybe<Scalars['DateTime']['input']>
  studio?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type UpdateAlbumVersionInput = {
  albumId?: InputMaybe<Scalars['Int']['input']>
  format?: InputMaybe<SupportType>
  id: Scalars['Int']['input']
  name?: InputMaybe<Scalars['String']['input']>
  year?: InputMaybe<Scalars['Int']['input']>
}

export type UpdateCollectionItemInput = {
  albumVersionId?: InputMaybe<Scalars['Int']['input']>
  condition?: InputMaybe<Condition>
  id: Scalars['Int']['input']
  memberId?: InputMaybe<Scalars['String']['input']>
  notes?: InputMaybe<Scalars['String']['input']>
}

export type UpdateExternalSourceInput = {
  albumId?: InputMaybe<Scalars['Int']['input']>
  externalId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  source?: InputMaybe<ExternalSourceType>
}

export type UpdateGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type UpdateGroupMusicianInput = {
  endYear?: InputMaybe<Scalars['Int']['input']>
  groupId?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  name?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Scalars['String']['input']>
  startYear?: InputMaybe<Scalars['Int']['input']>
}

export type UpdateGroupMusicianInstrumentInput = {
  groupMusicianId: Scalars['Int']['input']
  instrumentId: Scalars['Int']['input']
}

export type UpdateGroupStyleInput = {
  groupId: Scalars['Int']['input']
  styleId: Scalars['Int']['input']
}

export type UpdateInstrumentInput = {
  id: Scalars['Int']['input']
  name?: InputMaybe<Scalars['String']['input']>
}

export type UpdateMemberInput = {
  displayName?: InputMaybe<Scalars['String']['input']>
  uid: Scalars['String']['input']
}

export type UpdateMusicStyleInput = {
  id: Scalars['Int']['input']
  name?: InputMaybe<Scalars['String']['input']>
}

export type UpdatePurchaseInfoInput = {
  collectionItemId?: InputMaybe<Scalars['Int']['input']>
  date?: InputMaybe<Scalars['DateTime']['input']>
  id: Scalars['Int']['input']
  place?: InputMaybe<Scalars['String']['input']>
  price?: InputMaybe<Scalars['Int']['input']>
}

export type UpdateTrackInput = {
  albumId?: InputMaybe<Scalars['Int']['input']>
  duration?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  position?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type UpdateUserInput = {
  uid: Scalars['String']['input']
}

export type User = {
  __typename?: 'User'
  admin?: Maybe<Admin>
  createdAt: Scalars['DateTime']['output']
  image?: Maybe<Scalars['String']['output']>
  member?: Maybe<Member>
  name?: Maybe<Scalars['String']['output']>
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type UserOrderByWithRelationInput = {
  Member?: InputMaybe<MemberOrderByWithRelationInput>
  createdAt?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>
  isNot?: InputMaybe<UserWhereInput>
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Image = 'image',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  Member?: InputMaybe<MemberRelationFilter>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  name?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type UserWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type RegisterWithCredentialsMutationVariables = Exact<{
  registerWithCredentialsInput: RegisterWithCredentialsInput
}>

export type RegisterWithCredentialsMutation = {
  __typename?: 'Mutation'
  registerWithCredentials: {
    __typename?: 'User'
    updatedAt: any
    uid: string
    name?: string | null
    image?: string | null
    createdAt: any
  }
}

export type UsersQueryVariables = Exact<{
  orderBy?: InputMaybe<
    Array<UserOrderByWithRelationInput> | UserOrderByWithRelationInput
  >
}>

export type UsersQuery = {
  __typename?: 'Query'
  users: Array<{
    __typename?: 'User'
    name?: string | null
    image?: string | null
    uid: string
    createdAt: any
    updatedAt: any
    admin?: {
      __typename?: 'Admin'
      uid: string
      createdAt: any
      updatedAt: any
      user?: {
        __typename?: 'User'
        name?: string | null
        image?: string | null
        uid: string
        createdAt: any
        updatedAt: any
      } | null
    } | null
  }>
}

export const namedOperations = {
  Query: {
    Users: 'Users',
  },
  Mutation: {
    RegisterWithCredentials: 'RegisterWithCredentials',
  },
}

export const RegisterWithCredentialsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RegisterWithCredentials' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'registerWithCredentialsInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RegisterWithCredentialsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'registerWithCredentials' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'registerWithCredentialsInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'registerWithCredentialsInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RegisterWithCredentialsMutation,
  RegisterWithCredentialsMutationVariables
>
export const UsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Users' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'UserOrderByWithRelationInput' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'admin' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'uid' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>
