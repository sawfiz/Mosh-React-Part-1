import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import { FormData } from "./components/ExpenseForm";

const categories = ["Grocery", "Utility"];
const sample = [
  { description: "Milk", amount: 5, category: "Grocery" },
  { description: "Eggs", amount: 10, category: "Grocery" },
  { description: "Electricity", amount: 100, category: "Utility" },
];

function App() {
  const [filter, setFilter] = useState("");

  const [expenses, setExpenses] = useState(sample);

  const filteredExpenses = filter
    ? expenses.filter((expense) => expense.category === filter)
    : expenses;

  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseForm
        categories={categories}
        addExpense={(expense:FormData) => setExpenses((prev) => [...prev, expense])}
      />
      <ExpenseFilter categories={categories} setFilter={setFilter} />
      <ExpenseList expenses={filteredExpenses} />
    </>
  );
}

export default App;
