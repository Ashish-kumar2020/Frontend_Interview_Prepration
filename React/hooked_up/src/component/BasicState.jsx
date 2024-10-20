import React, { useState } from "react";

const BasicState = () => {
  // Learn how two way data bindings works
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    userName: "",
    email: "",
  });

  const [count, setCount] = useState(0);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setUserDetails({ ...userDetails, [name]: value });
  };

  const submitDetails = () => {
    console.log(userDetails);
  };

  //   Using this way it will incremenet the value only once because each time we are updating the state it is referncing to new memory location of count state. In order to track the prev state we need to pass prev prop in this
  const incrementCount = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      {/* {userDetails.firstName} */}
      <input
        type="text"
        placeholder="firstName"
        name="firstName"
        onChange={inputHandler}
      />
      {/* {userDetails.userName} */}
      <input
        type="text"
        placeholder="userName"
        name="userName"
        onChange={inputHandler}
      />
      {/* {userDetails.email} */}
      <input
        type="text"
        placeholder="email"
        name="email"
        onChange={inputHandler}
      />

      <h2>Count : {count}</h2>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={submitDetails}>Submit</button>
    </div>
  );
};

export default BasicState;
