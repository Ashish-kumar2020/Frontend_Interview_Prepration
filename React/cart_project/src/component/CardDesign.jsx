import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/cartSlice";

const ProductCard = ({ item }) => {
  const {
    title,
    brand,
    category,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    availabilityStatus,
    minimumOrderQuantity,
    returnPolicy,
    shippingInformation,
    warrantyInformation,
    thumbnail,
  } = item;

  const [quantity, setQuantity] = useState(0);

  const decrementQuantity = () => {
    setQuantity(quantity - 1);
  };

  const incrementQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const dispatch = useDispatch();

  const AddProductToCart = () => {
    if (quantity === 0) alert("Quantity can not be 0");
    if (quantity > 0) {
      dispatch(addToCart({ ...item, qty: quantity }));
      setQuantity(0);
    }
  };
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out mt-[40px]">
      {/* Product Image */}
      <img className="w-full h-64 object-contain" src={thumbnail} alt={title} />

      {/* Product Details */}
      <div className="p-5">
        {/* Title and Brand */}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 text-sm mb-2">by {brand}</p>

        {/* Price and Discount */}
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-xl font-bold text-gray-800">${price}</span>
          {discountPercentage > 0 && (
            <span className="text-sm text-red-600 font-semibold">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center text-yellow-400 text-sm mt-1">
          <span>&#9733; {rating}</span>
          <span className="ml-2 text-gray-600">({stock} in stock)</span>
        </div>

        {/* Availability Status */}
        <p
          className={`mt-2 text-sm font-semibold ${
            availabilityStatus === "Low Stock"
              ? "text-red-500"
              : "text-green-500"
          }`}
        >
          {availabilityStatus}
        </p>
        {/* Quantity Selector */}
        <div className="flex items-center mt-4">
          <button
            className="bg-gray-300 text-gray-800 rounded-l-lg px-3 py-1"
            onClick={decrementQuantity}
            disabled={quantity === 0}
          >
            -
          </button>
          <span className="px-4 py-1 border-t border-b border-gray-300">
            {quantity}
          </span>
          <button
            className="bg-gray-300 text-gray-800 rounded-r-lg px-3 py-1"
            onClick={incrementQuantity}
            disabled={quantity >= stock}
          >
            +
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-4">{description}</p>

        {/* Add to Cart Button */}
        <button
          className="w-full mt-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
          onClick={AddProductToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
