/*
  Warnings:

  - You are about to drop the column `description` on the `AnimalCategory` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AnimalCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AnimalCategory_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "AnimalType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AnimalCategory" ("createdAt", "id", "name", "typeId", "updatedAt") SELECT "createdAt", "id", "name", "typeId", "updatedAt" FROM "AnimalCategory";
DROP TABLE "AnimalCategory";
ALTER TABLE "new_AnimalCategory" RENAME TO "AnimalCategory";
CREATE UNIQUE INDEX "AnimalCategory_name_key" ON "AnimalCategory"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
