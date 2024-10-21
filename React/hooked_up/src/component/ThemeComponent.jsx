import React from "react";
import { useTheme } from "../context/themeContext";

const ThemeComponent = () => {
  const { theme, toggleTheme } = useTheme();
  const themeStyles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "10px",
    textAlign: "center",
    borderRadius: "5px",
  };
  return (
    <div style={themeStyles}>
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>

      <button onClick={toggleTheme}>
        Switch Theme to {theme === "light" ? "Dark" : "light"}
      </button>
    </div>
  );
};

export default ThemeComponent;
