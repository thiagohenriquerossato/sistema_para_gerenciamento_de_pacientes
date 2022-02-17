-- CreateTable
CREATE TABLE "userToken" (
    "id" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "userToken_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "userToken" ADD CONSTRAINT "userToken_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
