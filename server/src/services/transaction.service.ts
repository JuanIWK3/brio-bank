import { eq, sql } from "drizzle-orm";
import { db } from "../db";
import { transactions } from "../db/schema/transactions";
import { accounts } from "../db/schema/accounts";

export class TransactionService {
  constructor() {}

  async getAll() {
    return db.select().from(transactions).all();
  }

  async getAllByUserId({ id }: Input) {
    return db
      .select()
      .from(transactions)
      .where(sql`fromUserId = ${id}`);
  }

  async getById({ id }: Input) {
    return db
      .select()
      .from(transactions)
      .where(sql`id = ${id}`);
  }

  async newTransaction(input: NewTransactionInput) {
    const fromAccount = await db
      .select()
      .from(accounts)
      .where(eq(accounts.email, input.fromUserEmail))

    const toAccount = await db
      .select()
      .from(accounts)
      .where(eq(accounts.email, input.toUserEmail))

    await db
      .update(accounts)
      .set({ balance: fromAccount[0].balance - input.amount })
      .where(eq(accounts.id, fromAccount[0].id));

    await db
      .update(accounts)
      .set({ balance: toAccount[0].balance + input.amount })
      .where(eq(accounts.id, toAccount[0].id));

    return db.insert(transactions).values({
      fromUserId: fromAccount[0].id,
      toUserId: toAccount[0].id,
      amount: input.amount,
      description: input.description,
    });
  }
}

type Input = {
  id: string;
};

export type NewTransactionInput = {
  fromUserEmail: string;
  toUserEmail: string;
  amount: number;
  description: string;
};
