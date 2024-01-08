export const categories = ["Grocery", "Utility"] as const;

import { ExpenseFormData } from "./components/ExpenseForm";
export type Expense = { id: string } & ExpenseFormData;
