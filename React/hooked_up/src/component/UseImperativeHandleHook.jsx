import React, { forwardRef, useImperativeHandle, useRef } from "react";

const UseImperativeHandleHook = () => {
  const childRef = useRef(null);
  return (
    <div>
      UseImperativeHandleHook
      <h5>
        How do u call a function of child component from parent component?
      </h5>
      <button onClick={() => childRef.current.focusInput()}>
        Focus on Input
      </button>
      <ChildComponent ref={childRef} />
    </div>
  );
};

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  console.log("Child Component Called");
  const focusInput = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focusInput,
    };
  });

  return <input type="text" ref={inputRef} />;
});
export default UseImperativeHandleHook;
