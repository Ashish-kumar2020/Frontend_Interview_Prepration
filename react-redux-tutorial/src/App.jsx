import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/Todo";
import AddTodos from "./components/AddTodos";

function App() {
  return (
    <>
      <h1>Learn React Redux</h1>
      <AddTodos />
      <Todo />
    </>
  );
}

export default App;
