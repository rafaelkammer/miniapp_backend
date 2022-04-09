/*
  Warnings:

  - A unique constraint covering the columns `[ukey]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ukey]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Category_ukey_key" ON "Category"("ukey");

-- CreateIndex
CREATE UNIQUE INDEX "Product_ukey_key" ON "Product"("ukey");
