import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductAsync } from "../slice/cartSlice";
import CardDesign from "./CardDesign";
import ProductCard from "./CardDesign";

const Home = () => {
  // const dispatch = useDispatch();
  // const { products, cart } = useSelector((state) => state.cart);

  // const { sort, byStock, byRating, searchQuery } = useSelector(
  //   (state) => state.filter
  // );

  const dispatch = useDispatch();
  const { products, cart } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProductAsync());
  }, []);
  console.log(products);
  return (
    <div className="flex flex-wrap mt-12">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Home;
