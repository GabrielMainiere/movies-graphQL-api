-- CreateTable
CREATE TABLE "public"."movie_tbl" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "movie_tbl_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."actor_tbl" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "actor_tbl_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."genre_tbl" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "genre_tbl_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_MovieActor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_MovieActor_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_MovieGenre" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_MovieGenre_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_MovieActor_B_index" ON "public"."_MovieActor"("B");

-- CreateIndex
CREATE INDEX "_MovieGenre_B_index" ON "public"."_MovieGenre"("B");

-- AddForeignKey
ALTER TABLE "public"."_MovieActor" ADD CONSTRAINT "_MovieActor_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."actor_tbl"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_MovieActor" ADD CONSTRAINT "_MovieActor_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."movie_tbl"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_MovieGenre" ADD CONSTRAINT "_MovieGenre_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."genre_tbl"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_MovieGenre" ADD CONSTRAINT "_MovieGenre_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."movie_tbl"("id") ON DELETE CASCADE ON UPDATE CASCADE;
