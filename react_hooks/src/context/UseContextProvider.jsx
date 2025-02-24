// it returns jsx

import React, { useState } from "react";
import UseContext from "./UseContext";

const UseContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UseContext.Provider value={{ user, setUser }}>
      {children}
    </UseContext.Provider>
  );
};

export default UseContextProvider;
