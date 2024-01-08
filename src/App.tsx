import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

const categories = ["Grocery", "Utility"];

function App() {
  const [filter, setFilter] = useState("");

  const expenses = [
    { description: "Milk", amount: 5, category: "Grocery" },
    { description: "Eggs", amount: 10, category: "Grocery" },
    { description: "Electricity", amount: 100, category: "Utility" },
  ];

  const filteredExpenses = filter
    ? expenses.filter((expense) => expense.category === filter)
    : expenses;

  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseFilter
        categories={categories}
        setFilter={setFilter}
      />
      <ExpenseList expenses={filteredExpenses} />
    </>
  );
}

export default App;
