import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div>
        <NavLink to={"/auth/login"}>Login</NavLink>
        <NavLink to={"/auth/signup"}>Signup</NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
