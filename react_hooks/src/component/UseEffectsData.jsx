import React, { useEffect, useState } from "react";
import useCustomEffect from "../customHooks/customUseEffect";

const UseEffectsData = () => {
  const [data, setData] = useState();
  const fetchCartData = async (signal) => {
    const response = await fetch("https://dummyjson.com/carts", { signal });
    const dataVal = await response.json();
    setData(dataVal.carts);
    console.log(data);
  };

  useCustomEffect(() => {
    const controller = new AbortController();
    fetchCartData(controller.signal);

    return () => {
      controller.abort();
      console.log("ABorted");
    };
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
