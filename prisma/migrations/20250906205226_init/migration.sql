/*
  Warnings:

  - Added the required column `birthDate` to the `actor_tbl` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."actor_tbl" ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL;
