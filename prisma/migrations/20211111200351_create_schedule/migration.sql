-- CreateEnum
CREATE TYPE "ScheduleStatus" AS ENUM ('CLOSED', 'CANCELED', 'OPENED');

-- CreateTable
CREATE TABLE "schedule" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "animal_id" TEXT NOT NULL,
    "status" "ScheduleStatus" NOT NULL DEFAULT E'OPENED',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "schedule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "animals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
