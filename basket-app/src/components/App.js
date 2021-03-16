import "../App.css";
import BasketList from "./BasketList";
import GroceriesList from "./GroceriesList";
import { useState } from "react";

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
  //add item +counter
  const [counter, setCounter] = useState({});
  
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
  return (
    <div className="list-container">
      <GroceriesList groceries={groceries} addItem={addItem} />
      <BasketList
        items={counter}
        removeItem={removeItem}
        removeAll={removeAll}
      />
    </div>
  );
}

export default App;
