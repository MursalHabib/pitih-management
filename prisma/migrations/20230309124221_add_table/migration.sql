-- CreateTable
CREATE TABLE "Transaksi" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "nominal" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "category" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaksi_pkey" PRIMARY KEY ("id")
);
