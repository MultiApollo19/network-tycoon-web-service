-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'DEMO');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'DEMO';
