import React, { useEffect, useState } from "react";

const HomeComponent = () => {
  const [cartData, setCartData] = useState();

  const fetchCartData = async () => {
    const response = await fetch("https://dummyjson.com/carts");
    const data = await response.json();
    setCartData(data.carts);
  };

  useEffect(() => {
    fetchCartData();
  }, []);
  console.log(cartData);
  if (!cartData) {
    return <p>Loading....</p>;
  }
  return (
    <div>
      {cartData.map((ele) => (
        <li key={ele.id}>{ele.products[0].title}</li>
      ))}
      <h2>Discounted Price</h2>
      {cartData
        .filter((ele) => ele.discountedTotal < 3000)
        .map((ele) => (
          <li key={ele.id}>{ele.products[0].title}</li>
        ))}
    </div>
  );
};

export default HomeComponent;
