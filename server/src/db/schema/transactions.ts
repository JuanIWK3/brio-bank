import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const transactions = sqliteTable("transactions", {
  id: integer("id").primaryKey(),
  fromUserId: integer("fromUserId").notNull(),
  toUserId: integer("toUserId").notNull(),
  amount: integer("amount").notNull(),
  description: text("description").notNull(),
  createdAt: text("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});
