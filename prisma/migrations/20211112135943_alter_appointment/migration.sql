/*
  Warnings:

  - Made the column `date` on table `appointments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `animal_id` on table `appointments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `appointments` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "appointments" DROP CONSTRAINT "appointments_animal_id_fkey";

-- AlterTable
ALTER TABLE "appointments" ALTER COLUMN "date" SET NOT NULL,
ALTER COLUMN "animal_id" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL;
