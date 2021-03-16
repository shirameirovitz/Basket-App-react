import React from "react";

function BasketItem({ name, amount, remove }) {
  return (
    <li>
      <button onClick={remove}>-</button>
      <span>{`${amount} ${name}`}</span>
    </li>
  );
}

export default BasketItem;
