import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

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
      <ExpandableText maxChar={30}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        expedita ipsum voluptatum repellendus magnam dolores autem. Similique
        harum molestiae ipsa suscipit laboriosam eaque architecto. Culpa
        cupiditate exercitationem provident praesentium libero fugiat cumque,
        officiis voluptatum dolores quod necessitatibus explicabo vitae minima,
        accusantium, nam quibusdam rem obcaecati in maiores excepturi reiciendis
        quaerat animi atque blanditiis? Repudiandae nulla provident, magnam
        expedita maiores vero minima ut, aliquam odio quas laboriosam ducimus
        velit, repellat nesciunt nostrum! Animi rerum ad aliquam accusamus, et
        obcaecati facere earum blanditiis, neque voluptatem, tempore molestias.
        A consectetur, tenetur ipsum aliquid temporibus, pariatur ad sapiente
        commodi quis, magnam asperiores atque voluptatem.
      </ExpandableText>
      <Form />
    </>
  );
}

export default App;
