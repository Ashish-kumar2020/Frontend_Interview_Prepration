import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between h-[50px] items-center">
      {/* Logo */}
      <div className="w-[200px] ml-[50px] text-[20px] font-[600] text-white">
        <h2>Shopping Cart</h2>
      </div>

      {/* Right Side bar */}
      <div>
        <ul className="flex justify-between w-[120px] mr-[50px] text-[20px] font-[600] text-white">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Cart</li>
        </ul>
      </div>
    </div>
  );
};

// 19 24 38
export default Header;
