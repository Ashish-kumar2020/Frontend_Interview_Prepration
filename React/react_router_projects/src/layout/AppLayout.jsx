import React from "react";
import Header from "../component/Header";
import { Outlet, useNavigation } from "react-router-dom";
const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      React Router DOM
      <Header />
      {isLoading && <div>Loading...</div>}
      <Outlet />
    </div>
  );
};

export default AppLayout;
