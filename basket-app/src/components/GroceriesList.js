import React from "react";
import GroceryItem from "./GroceryItem";

function GroceriesList({ groceries, addItem }) {
  return (
    <ul>
      <h2>Groceries</h2>
      {groceries.map((name, i) => (
        <GroceryItem key={i} name={name} add={() => addItem(name)} />
      ))}
    </ul>
  );
}

export default GroceriesList;
