/*
  Warnings:

  - Changed the type of `expires_in` on the `userToken` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "userToken" DROP COLUMN "expires_in",
ADD COLUMN     "expires_in" TIMESTAMP(3) NOT NULL;
