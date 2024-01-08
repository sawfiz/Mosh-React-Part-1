import { z } from "zod";

export const expenseSchema = z.object({
  description: z.string().min(3, "Description must be at least 3 characters."),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .positive("Amount must be positive."),
  category: z.string().trim().min(1),
});

export type ExpenseFormData = z.infer<typeof expenseSchema>;

export type Category = "Grocery" | "Utility";

export type Expense = { id: string } & ExpenseFormData;
