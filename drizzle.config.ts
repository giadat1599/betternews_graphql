import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/drizzle/schemas/*.schema.ts",
  out: "./src/drizzle/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
