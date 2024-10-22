import React, { useMemo, useState } from "react";
import customUseMemoHook from "../Hooks/useMemoCustom";
const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);
  const squaredValue = () => {
    console.log("Expensive task");
    return count * count;
  };

  const memoisedSquaredValue = customUseMemoHook(squaredValue, [count]);
  return (
    <div>
      useMemoHook
      <h2>Counter : {count}</h2>
      <h2>Squared Value : {memoisedSquaredValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Counter2 : {count2}</h2>
      <button onClick={() => setCount2(count2 - 1)}>Decrement</button>
    </div>
  );
};

export default UseMemoHook;
