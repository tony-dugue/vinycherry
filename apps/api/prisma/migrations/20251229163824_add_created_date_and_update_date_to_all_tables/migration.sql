/*
  Warnings:

  - The primary key for the `Album` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Album` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `AlbumVersion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `AlbumVersion` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `CollectionItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `CollectionItem` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ExternalSource` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ExternalSource` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `albumId` column on the `ExternalSource` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Group` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Group` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `GroupMusician` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `GroupMusician` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `GroupMusicianInstrument` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `GroupStyle` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Instrument` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Instrument` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `MusicStyle` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `MusicStyle` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `PurchaseInfo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `PurchaseInfo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Track` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Track` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `groupId` on the `Album` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `AlbumVersion` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `albumId` on the `AlbumVersion` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `albumVersionId` on the `CollectionItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `ExternalSource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `GroupMusician` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `groupId` on the `GroupMusician` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `groupMusicianId` on the `GroupMusicianInstrument` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `instrumentId` on the `GroupMusicianInstrument` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `groupId` on the `GroupStyle` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `styleId` on the `GroupStyle` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `Instrument` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `MusicStyle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `PurchaseInfo` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `collectionItemId` on the `PurchaseInfo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `Track` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `albumId` on the `Track` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Album" DROP CONSTRAINT "Album_groupId_fkey";

-- DropForeignKey
ALTER TABLE "AlbumVersion" DROP CONSTRAINT "AlbumVersion_albumId_fkey";

-- DropForeignKey
ALTER TABLE "CollectionItem" DROP CONSTRAINT "CollectionItem_albumVersionId_fkey";

-- DropForeignKey
ALTER TABLE "ExternalSource" DROP CONSTRAINT "ExternalSource_albumId_fkey";

-- DropForeignKey
ALTER TABLE "GroupMusician" DROP CONSTRAINT "GroupMusician_groupId_fkey";

-- DropForeignKey
ALTER TABLE "GroupMusicianInstrument" DROP CONSTRAINT "GroupMusicianInstrument_groupMusicianId_fkey";

-- DropForeignKey
ALTER TABLE "GroupMusicianInstrument" DROP CONSTRAINT "GroupMusicianInstrument_instrumentId_fkey";

-- DropForeignKey
ALTER TABLE "GroupStyle" DROP CONSTRAINT "GroupStyle_groupId_fkey";

-- DropForeignKey
ALTER TABLE "GroupStyle" DROP CONSTRAINT "GroupStyle_styleId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseInfo" DROP CONSTRAINT "PurchaseInfo_collectionItemId_fkey";

-- DropForeignKey
ALTER TABLE "Track" DROP CONSTRAINT "Track_albumId_fkey";

-- AlterTable
ALTER TABLE "Album" DROP CONSTRAINT "Album_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "groupId",
ADD COLUMN     "groupId" INTEGER NOT NULL,
ADD CONSTRAINT "Album_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "AlbumVersion" DROP CONSTRAINT "AlbumVersion_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "albumId",
ADD COLUMN     "albumId" INTEGER NOT NULL,
ADD CONSTRAINT "AlbumVersion_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CollectionItem" DROP CONSTRAINT "CollectionItem_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "albumVersionId",
ADD COLUMN     "albumVersionId" INTEGER NOT NULL,
ADD CONSTRAINT "CollectionItem_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ExternalSource" DROP CONSTRAINT "ExternalSource_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "albumId",
ADD COLUMN     "albumId" INTEGER,
ADD CONSTRAINT "ExternalSource_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Group" DROP CONSTRAINT "Group_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Group_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "GroupMusician" DROP CONSTRAINT "GroupMusician_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "groupId",
ADD COLUMN     "groupId" INTEGER NOT NULL,
ADD CONSTRAINT "GroupMusician_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "GroupMusicianInstrument" DROP CONSTRAINT "GroupMusicianInstrument_pkey",
DROP COLUMN "groupMusicianId",
ADD COLUMN     "groupMusicianId" INTEGER NOT NULL,
DROP COLUMN "instrumentId",
ADD COLUMN     "instrumentId" INTEGER NOT NULL,
ADD CONSTRAINT "GroupMusicianInstrument_pkey" PRIMARY KEY ("groupMusicianId", "instrumentId");

-- AlterTable
ALTER TABLE "GroupStyle" DROP CONSTRAINT "GroupStyle_pkey",
DROP COLUMN "groupId",
ADD COLUMN     "groupId" INTEGER NOT NULL,
DROP COLUMN "styleId",
ADD COLUMN     "styleId" INTEGER NOT NULL,
ADD CONSTRAINT "GroupStyle_pkey" PRIMARY KEY ("groupId", "styleId");

-- AlterTable
ALTER TABLE "Instrument" DROP CONSTRAINT "Instrument_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Instrument_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "MusicStyle" DROP CONSTRAINT "MusicStyle_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "MusicStyle_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "PurchaseInfo" DROP CONSTRAINT "PurchaseInfo_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "collectionItemId",
ADD COLUMN     "collectionItemId" INTEGER NOT NULL,
ADD CONSTRAINT "PurchaseInfo_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Track" DROP CONSTRAINT "Track_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "albumId",
ADD COLUMN     "albumId" INTEGER NOT NULL,
ADD CONSTRAINT "Track_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseInfo_collectionItemId_key" ON "PurchaseInfo"("collectionItemId");

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
ALTER TABLE "CollectionItem" ADD CONSTRAINT "CollectionItem_albumVersionId_fkey" FOREIGN KEY ("albumVersionId") REFERENCES "AlbumVersion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseInfo" ADD CONSTRAINT "PurchaseInfo_collectionItemId_fkey" FOREIGN KEY ("collectionItemId") REFERENCES "CollectionItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExternalSource" ADD CONSTRAINT "ExternalSource_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE SET NULL ON UPDATE CASCADE;
