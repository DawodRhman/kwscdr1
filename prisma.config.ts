import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    // Fallback to a placeholder if DATABASE_URL is missing during build (e.g. Vercel)
    url: process.env.DATABASE_URL ?? "postgresql://placeholder:placeholder@localhost:5432/placeholder",
  },
  seed: {
    provider: "node",
    value: "./prisma/seed.js",
  },
});
