-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orgs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "responsible_name" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "whatsapp" INTEGER NOT NULL
);
INSERT INTO "new_orgs" ("address", "email", "id", "password_hash", "responsible_name", "whatsapp", "zip_code") SELECT "address", "email", "id", "password_hash", "responsible_name", "whatsapp", "zip_code" FROM "orgs";
DROP TABLE "orgs";
ALTER TABLE "new_orgs" RENAME TO "orgs";
CREATE UNIQUE INDEX "orgs_email_key" ON "orgs"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
