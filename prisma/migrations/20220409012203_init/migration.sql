/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Category` table. All the data in the column will be lost.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_category_ukey_fkey";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "id",
ADD COLUMN     "ukey" SERIAL NOT NULL,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("ukey");

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "id",
ADD COLUMN     "ukey" SERIAL NOT NULL,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("ukey");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_ukey_fkey" FOREIGN KEY ("category_ukey") REFERENCES "Category"("ukey") ON DELETE SET NULL ON UPDATE CASCADE;
