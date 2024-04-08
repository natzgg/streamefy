import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  imageUrl: text("imageUrl").notNull(),
  bio: text("bio"),
});
