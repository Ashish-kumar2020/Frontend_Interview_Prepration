import React, { useEffect, useState } from "react";
import CardContext from "./CardContext";

const CardDetails = ({ children }) => {
  const [data, setData] = useState([]);
  const fetchCardDetails = async () => {
    const response = await fetch("https://dummyjson.com/carts");
    const data = await response.json();
    setData(data.carts);
  };

  useEffect(() => {
    fetchCardDetails();
  }, []);
  console.log(data);
  return <CardContext.Provider value={data}>{children}</CardContext.Provider>;
};

export default CardDetails;
