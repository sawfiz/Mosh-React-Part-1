import { Category } from "../types";

interface Props {
  categories: Category[];
  setFilter: (category: string) => void;
}

const ExpenseFilter = ({ categories, setFilter }: Props) => {
  return (
    <select
      className="custom-select custom-select-lg mb-3"
      defaultValue=""
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
