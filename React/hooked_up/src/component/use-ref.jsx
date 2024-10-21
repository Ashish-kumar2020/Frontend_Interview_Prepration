import React, { useRef, useState } from "react";

const UseRef = () => {
  const ref = useRef(0);
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  return (
    <div>
      <p>ref value : {ref.current}</p>
      <p>useState Count : {count}</p>
      <button
        onClick={() => {
          ref.current += 1;
        }}
      >
        Increment Ref
      </button>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        State Increment
      </button>

      <h5>Question 2: When would you use useRef?</h5>
      {/* 
        - Accessing DOM elements or managing focus.
        - Storing mutable values that persist without causing re-renders.
        - Caching values to avoid re-initialization on re-renders.
      */}

      <h5>Question 3: How do you access a DOM element using useRef?</h5>
      <input type="text" ref={inputRef} />

      <button
        onClick={() => {
          inputRef.current.focus();
          inputRef.current.value = 5;
        }}
      >
        Set Focus
      </button>
    </div>
  );
};

export default UseRef;
