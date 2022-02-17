-- AlterTable
ALTER TABLE "vaccines" ALTER COLUMN "observations" DROP NOT NULL,
ALTER COLUMN "observations" DROP DEFAULT;
