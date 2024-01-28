import { Hono } from "hono";
import accountRouter from "./routes/account";
import transactionRouter from "./routes/transactions";
import { cors } from "hono/cors";

const app = new Hono();

app.get("/", async (c) => {
  return c.text("btw bun");
});

app.use(
  "/*",
  cors({
    origin: "*",
  })
);

console.log("bun is running on http://localhost:3030");

app.route("/accounts", accountRouter);
app.route("/transactions", transactionRouter);

Bun.serve({
  fetch: app.fetch,
  port: process.env.PORT || 3030,
});
