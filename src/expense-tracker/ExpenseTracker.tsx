import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Category, Expense, ExpenseFormData } from './types.tsx';
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const categories: Category[] = ["Grocery", "Utility"];

const initData: Expense[] = [
  { id: uuidv4(), description: "Milk", amount: 5, category: "Grocery" },
  { id: uuidv4(), description: "Eggs", amount: 10, category: "Grocery" },
  {
    id: uuidv4(),
    description: "Electricity",
    amount: 100,
    category: "Utility",
  },
];

// ! Three issues
// - Form validation errors only show after a submit
// - Can not right align amount in table
// - Can not bold Total in table
// - custom-select does not style correctly

function App() {
  const [filter, setFilter] = useState("");

  const [expenses, setExpenses] = useState(initData);

  const filteredExpenses = filter
    ? expenses.filter((expense) => expense.category === filter)
    : expenses;

  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseForm
        categories={categories}
        addExpense={(data: ExpenseFormData) =>
          setExpenses((prev) => [...prev, {id: uuidv4(), ...data}])
        }
      />
      <ExpenseFilter categories={categories} setFilter={setFilter} />
      <ExpenseList
        expenses={filteredExpenses}
        delExpense={(id: string) =>
          setExpenses(expenses.filter((item) => item.id != id))
        }
      />
    </>
  );
}

export default App;
