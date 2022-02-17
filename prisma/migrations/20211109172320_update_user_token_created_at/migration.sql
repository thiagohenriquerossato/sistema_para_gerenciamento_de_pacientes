/*
  Warnings:

  - Added the required column `expires_in` to the `userToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userToken" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expires_in" TEXT NOT NULL;
