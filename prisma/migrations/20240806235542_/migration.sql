/*
  Warnings:

  - Added the required column `image_url` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "avg_star_rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
ADD COLUMN     "image_url" TEXT NOT NULL,
ADD COLUMN     "new_arrival" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sizes" INTEGER[] DEFAULT ARRAY[6, 7, 8, 9, 10, 11]::INTEGER[];
