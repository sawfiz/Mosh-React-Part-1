import "./App.css";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelect = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup heading="Cities" items={items} onSelect={handleSelect} />
      <Button variant="primary">OK</Button>
      <Like onClick={() => console.log("Clicked")} />
    </>
  );
}

export default App;
