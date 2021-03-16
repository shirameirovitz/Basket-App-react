import "../App.css";
import Groceries from "./GroceriesList";
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
      <BasketList key={index} name={item.name} id={item.id} />
    </div>
  );
}

export default App;
