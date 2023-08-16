/*
  Warnings:

  - Added the required column `environment` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "energy_level" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "independence_level" INTEGER NOT NULL,
    "environment" TEXT NOT NULL
);
INSERT INTO "new_pets" ("age", "energy_level", "id", "independence_level", "name", "size") SELECT "age", "energy_level", "id", "independence_level", "name", "size" FROM "pets";
DROP TABLE "pets";
ALTER TABLE "new_pets" RENAME TO "pets";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
