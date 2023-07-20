-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "postNumber" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "tags" TEXT[],
    "driveId" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
