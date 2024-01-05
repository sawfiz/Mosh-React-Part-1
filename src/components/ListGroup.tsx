import { useState } from "react";

// Declare the component interface
interface Props {
  heading: string;
  items: string[];
  onSelect: (item: string) => void;
}

// Deconstruct the props so they can be used directly,
// instead of refer to as props.heading, props.items
const ListGroup = ({ heading, items, onSelect }: Props) => {
  const [selected, setSelected] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              index === selected ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              setSelected(index);
              onSelect(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
