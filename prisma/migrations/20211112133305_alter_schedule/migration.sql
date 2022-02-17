/*
  Warnings:

  - The `status` column on the `schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "schedule" DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT E'OPENED';

-- DropEnum
DROP TYPE "ScheduleStatus";
