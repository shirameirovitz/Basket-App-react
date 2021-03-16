import React from "react";
import BasketItem from "./BasketItem";

function BasketList({ items, removeItem, removeAll }) {
  const itemArr = Object.entries(items);
  console.log(items);
  return (
    <ul>
      <h2>Basket</h2>
      <button onClick={removeAll}>
        <i className="fa fa-trash" aria-hidden="true">
          delete
        </i>
      </button>
      {itemArr.map(([itemName, amount], i) => (
        <BasketItem
          key={i}
          name={itemName}
          amount={amount}
          remove={() => removeItem(itemName)}
        />
      ))}
    </ul>
  );
}
export default BasketList;
