import React, { useEffect, useState } from "react";

const UseEffectsData = () => {
  const [data, setData] = useState();
  const fetchCartData = async () => {
    const response = await fetch("https://dummyjson.com/carts");
    const dataVal = await response.json();
    setData(dataVal.carts);
    console.log(data);
  };

  useEffect(() => {
    fetchCartData();
  }, []);
  return (
    <div>
      Cart Items
      {data ? (
        data.map((ele, index) => (
          <ul>
            <li key={index}>{ele.products[0].title}</li>
          </ul>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UseEffectsData;
