-- CreateTable
CREATE TABLE "orgs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "responsible_name" TEXT NOT NULL,
    "zip_code" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "whatsapp" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "pets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "energy_level" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "independence_level" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "image_pet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "original_name" TEXT NOT NULL,
    "name_file" TEXT NOT NULL,
    "path" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "orgs_email_key" ON "orgs"("email");
