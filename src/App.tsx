import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelect = (item) => {
    console.log(item)
  }

  return (
    <>
      <ListGroup heading="Cities" items={items} onSelect={handleSelect} />
    </>
  );
}

export default App;
