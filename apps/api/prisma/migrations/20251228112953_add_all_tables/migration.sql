-- CreateEnum
CREATE TYPE "SupportType" AS ENUM ('VINYL', 'CD', 'CASSETTE', 'DIGITAL', 'BOX');

-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('MINT', 'VERY_GOOD', 'GOOD', 'FAIR', 'POOR');

-- CreateEnum
CREATE TYPE "ExternalSourceType" AS ENUM ('MUSICBRAINZ', 'DISCOGS', 'AUDIO_DB', 'SPOTIFY');

-- CreateTable
CREATE TABLE "Member" (
    "uid" TEXT NOT NULL,
    "displayName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "MusicStyle" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MusicStyle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupStyle" (
    "groupId" TEXT NOT NULL,
    "styleId" TEXT NOT NULL,

    CONSTRAINT "GroupStyle_pkey" PRIMARY KEY ("groupId","styleId")
);

-- CreateTable
CREATE TABLE "GroupMusician" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "startYear" INTEGER,
    "endYear" INTEGER,
    "groupId" TEXT NOT NULL,

    CONSTRAINT "GroupMusician_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instrument" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Instrument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupMusicianInstrument" (
    "groupMusicianId" TEXT NOT NULL,
    "instrumentId" TEXT NOT NULL,

    CONSTRAINT "GroupMusicianInstrument_pkey" PRIMARY KEY ("groupMusicianId","instrumentId")
);

-- CreateTable
CREATE TABLE "Album" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3),
    "studio" TEXT,
    "coverUrl" TEXT,
    "groupId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Track" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "duration" INTEGER,
    "albumId" TEXT NOT NULL,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlbumVersion" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "format" "SupportType" NOT NULL,
    "year" INTEGER,
    "albumId" TEXT NOT NULL,

    CONSTRAINT "AlbumVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollectionItem" (
    "id" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "albumVersionId" TEXT NOT NULL,
    "condition" "Condition" NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CollectionItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseInfo" (
    "id" TEXT NOT NULL,
    "price" DOUBLE PRECISION,
    "place" TEXT,
    "date" TIMESTAMP(3),
    "collectionItemId" TEXT NOT NULL,

    CONSTRAINT "PurchaseInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExternalSource" (
    "id" TEXT NOT NULL,
    "source" "ExternalSourceType" NOT NULL,
    "externalId" TEXT NOT NULL,
    "albumId" TEXT,

    CONSTRAINT "ExternalSource_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MusicStyle_name_key" ON "MusicStyle"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Instrument_name_key" ON "Instrument"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseInfo_collectionItemId_key" ON "PurchaseInfo"("collectionItemId");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupStyle" ADD CONSTRAINT "GroupStyle_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupStyle" ADD CONSTRAINT "GroupStyle_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "MusicStyle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMusician" ADD CONSTRAINT "GroupMusician_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMusicianInstrument" ADD CONSTRAINT "GroupMusicianInstrument_groupMusicianId_fkey" FOREIGN KEY ("groupMusicianId") REFERENCES "GroupMusician"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMusicianInstrument" ADD CONSTRAINT "GroupMusicianInstrument_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumVersion" ADD CONSTRAINT "AlbumVersion_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionItem" ADD CONSTRAINT "CollectionItem_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionItem" ADD CONSTRAINT "CollectionItem_albumVersionId_fkey" FOREIGN KEY ("albumVersionId") REFERENCES "AlbumVersion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseInfo" ADD CONSTRAINT "PurchaseInfo_collectionItemId_fkey" FOREIGN KEY ("collectionItemId") REFERENCES "CollectionItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExternalSource" ADD CONSTRAINT "ExternalSource_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE SET NULL ON UPDATE CASCADE;
