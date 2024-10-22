import React, { useState } from "react";

import useDebounceHook from "../custom_hooks/useDebounceHook";

const UseDebounceHook = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const debouncedvalue = useDebounceHook(inputText, 1000, () => {
    console.log("Callback Function call");
  });
  return (
    <div>
      UseDebounceHook
      <p>{debouncedvalue}</p>
      <input
        type="text"
        value={inputText}
        placeholder="Type Something... "
        onChange={handleInputChange}
      />
    </div>
  );
};

export default UseDebounceHook;
