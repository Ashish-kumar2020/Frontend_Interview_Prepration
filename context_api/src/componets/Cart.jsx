import React, { useContext } from "react";
import CardContext from "../context/CardContext";

const Cart = () => {
  const data = useContext(CardContext);
  if (!data) return <p>Loading....</p>;
  return (
    <div>
      {data.map((ele) => (
        <li key={ele.id}>{ele.products[0].title}</li>
      ))}
    </div>
  );
};

export default Cart;
