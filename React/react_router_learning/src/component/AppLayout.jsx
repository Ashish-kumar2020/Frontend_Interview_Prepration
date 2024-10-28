import React from "react";

import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      React Router Dom
      {isLoading && <div>Loading...</div>}
      <Outlet />
    </div>
  );
};

export default AppLayout;
