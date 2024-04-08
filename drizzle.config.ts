import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./lib/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.SUPABASE_DB_URL as string,
  },
  verbose: true,
  strict: true,
});
