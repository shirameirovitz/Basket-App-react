import React from "react";

function GroceryItem({ name, add }) {
  return (
    <li>
      <button
        onClick={() => {
          add();
          console.log("add item" + name);
        }}
      >
        +
      </button>
      {name}
    </li>
  );
}

export default GroceryItem;
