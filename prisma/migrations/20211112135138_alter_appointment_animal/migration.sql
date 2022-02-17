-- DropForeignKey
ALTER TABLE "appointments" DROP CONSTRAINT "appointments_animal_id_fkey";

-- AlterTable
ALTER TABLE "appointments" ALTER COLUMN "date" DROP NOT NULL,
ALTER COLUMN "animal_id" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "animals"("id") ON DELETE SET NULL ON UPDATE CASCADE;
