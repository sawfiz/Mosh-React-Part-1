import ExpenseList from "./components/ExpenseList";

function App() {
  const expenses = [
    {description: "Milk", amount: 5, category: "Grocery"},
    {description: "Eggs", amount: 10, category: "Grocery"},
    {description: "Electricity", amount: 100, category: "Utility"},
  ]

  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseList expenses={expenses}/>

    </>
  );
}

export default App;
