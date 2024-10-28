import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h1>React Router DOM</h1>
      <NavLink>Login</NavLink>
      <NavLink>Signup</NavLink>
    </div>
  );
};

export default Header;
