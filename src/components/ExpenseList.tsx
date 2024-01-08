import { FormData } from "./ExpenseForm";

interface Props {
  expenses: {
    description: string;
    amount: number;
    category: string;
  }[];
  delExpense: (expense: FormData) => void;
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
              <td>{expense.amount} </td>
              <td>{expense.category} </td>
              <td><button className='btn btn-danger' onClick={() => delExpense(expense)}>Delete</button></td>
            </tr>
          ))}
          <tr>
            <th scope="row"></th>
            <td>Total</td>
            <td>{total} </td>
            <td> </td>
            <td> </td>
          </tr>
        </tbody>
      </table>
  );
};

export default ExpenseList;
