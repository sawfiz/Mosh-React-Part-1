import { Expense } from "../types";

interface Props {
  expenses: Expense[];
  delExpense: (id: string) => void;
}
const ExpenseList = ({ expenses, delExpense }: Props) => {
  // reduce needs an initial value, 0
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index + 1}>
            <th scope="row">{index + 1}</th>
            <td>{expense.description} </td>
            <td className="text-right">${expense.amount.toFixed(2)}</td>
            <td>{expense.category} </td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => delExpense(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <th scope="row"></th>
          <td>Total</td>
          <td className="text-right">${total.toFixed(2)}</td>
          <td> </td>
          <td> </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseList;
