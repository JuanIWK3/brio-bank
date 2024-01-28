import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

type UserId = number & { __brand: 'user_id' };

export const accounts = sqliteTable("accounts", {
  id: integer("id").primaryKey(),
  email: text("email").notNull(),
  name: text("name").notNull(),
  balance: integer("balance").default(0).notNull(),
  createdAt: text("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});
