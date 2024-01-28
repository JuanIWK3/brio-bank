import { sql } from "drizzle-orm";
import { db } from "../db";
import { accounts } from "../db/schema/accounts";

export class AccountService {
  async getAll() {
    return await db.select().from(accounts).all();
  }

  async getById(input: GetAccountInput) {
    const data = await db
      .select()
      .from(accounts)
      .where(sql`id = ${input.id}`);

    if (data.length === 0) {
      throw new Error("Account not found");
    }

    return data[0];
  }

  async getByEmail(input: GetAccountByEmailInput) {
    return await db
      .select()
      .from(accounts)
      .where(sql`email = ${input.email}`);
  }

  async register(input: RegisterInput) {
    const existingAccount = await this.getByEmail({ email: input.email });

    if (existingAccount.length > 0) {
      throw new Error("Account already exists");
    }

    return await db.insert(accounts).values(input);
  }
}

type GetAccountInput = {
  id: number;
};

type GetAccountByEmailInput = {
  email: string;
};

type RegisterInput = {
  email: string;
  name: string;
  password: string;
};
