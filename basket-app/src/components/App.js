import "../App.css";
import BasketList from "./BasketList";
import GroceriesList from "./GroceriesList";
import { useEffect, useState } from "react";

function App() {
  const groceries = [
    "Strawberry",
    "Blueberry",
    "Orange",
    "Banana",
    "Apple",
    "Carrot",
    "Celery",
    "Mushroom",
    "Green Pepper",
    "Eggs",
    "Cheese",
    "Butter",
    "Chicken",
    "Beef",
    "Pork",
    "Fish",
    "Rice",
    "Pasta",
    "Bread",
  ];

  const [counter, setCounter] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  function addItem(itemName) {
    if (!counter[itemName]) {
      counter[itemName] = 1;
    } else {
      ++counter[itemName];
    }
    setCounter(Object.assign({}, counter));
  }
  function removeItem(itemName) {
    if (counter[itemName] === 1) {
      delete counter[itemName];
    } else {
      --counter[itemName];
    }
    setCounter(Object.assign({}, counter));
  }
  function removeAll() {
    setCounter({});
  }
  //search
  useEffect(() => {
    const results = groceries.filter((grocery) =>
      grocery.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="list-container">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />

      <GroceriesList groceries={searchResults} addItem={addItem} />
      <BasketList
        items={counter}
        removeItem={removeItem}
        removeAll={removeAll}
      />
    </div>
  );
}

export default App;
