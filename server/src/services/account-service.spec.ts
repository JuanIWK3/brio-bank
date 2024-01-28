import {
  expect,
  test,
  it,
  describe,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
} from "bun:test";
import { AccountService } from "./account-service";
import { db } from "../db";
import { sql } from "drizzle-orm";

describe("AccountService", () => {
  let service: AccountService;

  const registerInput = {
    email: "user@email.com",
    name: "user",
    password: "password",
  };

  beforeAll(() => {
    service = new AccountService();
  });

  beforeEach(async () => {
    const query = sql`DELETE FROM accounts`;
    await db.run(query);
  });

  test("get", async () => {
    const accounts = await service.getAll();

    expect(accounts).toBeInstanceOf(Array);
  });

  test("register", async () => {
    const registerOutput = await service.register(registerInput);

    expect(registerOutput.rowsAffected).toBe(1);
  })

  test("getById", async () => {
    await service.register(registerInput);
    await service.register({
      email: "user2@email.com",
      name: "user2",
      password: "password",
    });

    const account = await service.getByEmail({ email: registerInput.email});

    expect(account).toBeInstanceOf(Array);
  });
});
