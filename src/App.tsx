import "./App.css";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelect = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup heading="Cities" items={items} onSelect={handleSelect} />
      <Button variant="danger" handleClick={() => console.log("Clicked")}>
        OK
      </Button>
    </>
  );
}

export default App;
