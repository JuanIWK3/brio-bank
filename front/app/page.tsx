"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

type Account = {
  id: number;
  name: string;
  email: string;
  password: string;
  balance: number;
  created_at: string;
  updated_at: string;
};

type Transaction = {
  id: number;
  fromUserId: number;
  toUserId: number;
  amount: number;
  description: string;
  created_at: string;
};

const formSchema = z.object({
  fromUserEmail: z.string().email(),
  toUserEmail: z.string().email(),
  amount: z.coerce.number(),
  description: z.string(),
});

export default function Home() {
  const [users, setUsers] = useState<Account[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedUser, setSelectedUser] = useState<Account | null>(null);

  const getUsers = async () => {
    const res = await fetch("http://localhost:3030/accounts");
    const data = (await res.json()) as Account[];

    setUsers(data);
  };

  const getTransactions = async () => {
    const res = await fetch("http://localhost:3030/transactions");
    const data = (await res.json()) as Transaction[];

    setTransactions(data);
  };

  const sendMoney = async (data: z.infer<typeof formSchema>) => {
    const res = await fetch("http://localhost:3030/transactions/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    getUsers()
    getTransactions();
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fromUserEmail: "",
      toUserEmail: "",
      amount: 0,
      description: "",
    },

  });

  const onSubmit = form.handleSubmit((data) => {
    sendMoney(data)
  });

  useEffect(() => {
    getUsers();
    getTransactions();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-10">
      <h1 className="font-bold text-4xl">Based</h1>

      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-2xl">Users</h2>
        <ul>
          {users.map((user, i) => (
            <div
              onClick={() => {
                setSelectedUser(user);
              }}
              className={`flex cursor-pointer gap-4 transition-all duration-200 px-4 py-2 rounded ${
                selectedUser?.id === user.id ? "bg-gray-200" : ""
              }`}
              key={i}
            >
              <li>Email: {user.email}</li>
              <li>Balance: {user.balance}</li>
            </div>
          ))}
        </ul>
      </div>

      <Form {...form}>
        <form className="flex flex-col text-center" onSubmit={onSubmit}>
          <FormField
            control={form.control}
            name="fromUserEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>From</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          {form.formState.errors.fromUserEmail && (
            <span>{form.formState.errors.fromUserEmail.message}</span>
          )}
          <FormField
            control={form.control}
            name="toUserEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>To</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          {form.formState.errors.toUserEmail && (
            <span>{form.formState.errors.toUserEmail.message}</span>
          )}
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input type="number" {...field}/>
                </FormControl>
              </FormItem>
            )}
          />
          {form.formState.errors.amount && (
            <span>{form.formState.errors.amount.message}</span>
          )}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          {form.formState.errors.description && (
            <span>{form.formState.errors.description.message}</span>
          )}
          <Button type="submit">Send</Button>
        </form>
      </Form>

      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-2xl">Transactions</h2>
        <ul>
          {transactions.map((transaction, i) => (
            <div
              className={`flex cursor-pointer gap-4 transition-all duration-200 px-4 py-2 rounded`}
              key={i}
            >
              <li>From: {transaction.fromUserId}</li>
              <li>To: {transaction.toUserId}</li>
              <li>Amount: {transaction.amount}</li>
              <li>Description: {transaction.description}</li>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
}
