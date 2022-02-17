-- CreateTable
CREATE TABLE "vaccines" (
    "id" TEXT NOT NULL,
    "medicine" TEXT NOT NULL,
    "next_dose" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "animal_id" TEXT NOT NULL,

    CONSTRAINT "vaccines_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "vaccines" ADD CONSTRAINT "vaccines_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "animals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
