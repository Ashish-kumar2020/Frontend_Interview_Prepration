import React from "react";
import useWindowResize from "../custom_hooks/useWindowResize";

const WindowSize = () => {
  const { width, height } = useWindowResize();
  return (
    <div>
      WindowSize
      <p>Width : {width}</p>
      <p>Height : {height}</p>
    </div>
  );
};

export default WindowSize;
