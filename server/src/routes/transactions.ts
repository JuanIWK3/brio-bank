import { Hono, type HonoRequest } from "hono";
import { TransactionService, type NewTransactionInput } from "../services/transaction.service";

const transactionRouter = new Hono();
const transactionService = new TransactionService();

transactionRouter.get("/", async (c) => {
  const data = await transactionService.getAll();

  return c.json(data);
});

transactionRouter.get("/:id", async (c) => {
  const id = c.req.param("id");

  try {
    const data = await transactionService.getById({ id });
    return c.json(data);
  } catch (error) {
    return c.json(error);
  }
});

transactionRouter.get("/:user", async (c) => {
  const userId = c.req.param("user");

  try {
    const data = await transactionService.getAllByUserId({ id: userId });
    return c.json(data);
  } catch (error) {
    return c.json(error);
  }
});

transactionRouter.post("/new", async (c) => {
  const input = await c.req.json() as NewTransactionInput;

  try {
    const data = await transactionService.newTransaction(input);
    return c.json({data});
  } catch (error) {
    return c.json(error);
  }
});

export default transactionRouter;
