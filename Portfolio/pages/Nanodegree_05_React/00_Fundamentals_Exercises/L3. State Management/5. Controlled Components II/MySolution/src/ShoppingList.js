import { useState } from "react";
import ListItems from "./ListItems";

const ShoppingList = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    setItems([...items, value]);
    setValue("");
  };

  const deleteLastItem = (event) => {
    setItems(items.slice(0, -1));
  };

  const inputIsEmpty = () => value === "";

  const noItemsFound = () => items.length === 0;

  return (
    <div>
      <h2>Shopping List</h2>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={handleChange}
        />
        <button disabled={inputIsEmpty()}>Add</button>
      </form>

      <button onClick={deleteLastItem} disabled={noItemsFound()}>
        Delete Last Item
      </button>

      <ListItems items={items} />

    </div>
  );
};

export default ShoppingList;
