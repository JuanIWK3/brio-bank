import { Hono } from "hono";
import { AccountService } from "../services/account-service";

const accountRouter = new Hono();
const accountService = new AccountService();

accountRouter.get("/", async (c) => {
  const data = await accountService.getAll()

  return c.json(data);
});

accountRouter.get("/:id", async (c) => {
  const id = +c.req.param("id");

  try {
    const data = await accountService.getById({ id });
    return c.json(data);
  } catch (error) {
    return c.json(error);
  }
});

accountRouter.post("/register", async (c) => {
  const { email, name, password } = {
    email: "user@email.com",
    name: "user",
    password: "password",
  };

  const data = await accountService.register({ email, name, password });

  return c.json(data.toJSON());
});

export default accountRouter;
