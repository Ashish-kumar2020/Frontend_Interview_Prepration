import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardContext from "./context/CardContext";
import Cart from "./componets/Cart";
import CardDetails from "./context/CardDetails";
function App() {
  return (
    <CardDetails>
      <Cart />
    </CardDetails>
  );
}

export default App;
