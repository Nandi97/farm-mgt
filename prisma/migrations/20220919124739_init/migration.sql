/*
  Warnings:

  - You are about to drop the `Uoms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `uomsId` on the `Products` table. All the data in the column will be lost.
  - Added the required column `unitsOfMeasurementId` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Uoms";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "UnitsOfMeasurement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "unit" TEXT NOT NULL,
    "initial" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Products" (
    "is" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "unitsOfMeasurementId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Products_unitsOfMeasurementId_fkey" FOREIGN KEY ("unitsOfMeasurementId") REFERENCES "UnitsOfMeasurement" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Products" ("imageUrl", "is", "name", "status") SELECT "imageUrl", "is", "name", "status" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
