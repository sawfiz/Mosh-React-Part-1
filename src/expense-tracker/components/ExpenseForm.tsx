import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Category, ExpenseFormData, expenseSchema } from "../types";

interface Props {
  categories: Category[];
  addExpense: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ categories, addExpense }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ExpenseFormData>({ resolver: zodResolver(expenseSchema) });

  const onSubmit = (data: ExpenseFormData) => {
    addExpense(data);
    reset();
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
      <label className="form-label">Description</label>
      <input
        type="text"
        className="form-control mb-2"
        {...register("description")}
      />
      {errors.description && (
        <p className="text-danger">{errors.description.message}</p>
      )}

      <label className="form-label">Amount</label>
      <input
        type="number"
        className="form-control mb-2"
        {...register("amount", { valueAsNumber: true })}
      />
      {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
      <div>
        <select
          className="form-select mb-2"
          defaultValue=""
          {...register("category")}
        >
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
