/*
  Warnings:

  - You are about to drop the column `age` on the `animals` table. All the data in the column will be lost.
  - Added the required column `birth` to the `animals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "animals" DROP COLUMN "age",
ADD COLUMN     "birth" TIMESTAMP(3) NOT NULL;
