import React from "react";
/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
const RequireAuth = ({ children }) => {
  const loggedIn = localStorage.getItem("loggedin");
  if (!loggedIn) {
    return <Navigate to={"/auth/login"} />;
  }
  return children;
};

export default RequireAuth;
