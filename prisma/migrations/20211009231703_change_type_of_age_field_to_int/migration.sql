/*
  Warnings:

  - Changed the type of `age` on the `Profile` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "age",
ADD COLUMN     "age" INTEGER NOT NULL;

-- RenameIndex
ALTER INDEX "Profile_userId_unique" RENAME TO "Profile_userId_key";
