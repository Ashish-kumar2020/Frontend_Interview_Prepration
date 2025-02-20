import React, { useState } from "react";

const UseState = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const submitUserData = () => {
    console.log(userData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userData);
        }}
      >
        <input
          type="text"
          name="firstName"
          placeholder="Enter your firstName"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter your lastName"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          onChange={handleInputChange}
        />
        <button onSubmit={submitUserData}>Submit</button>
      </form>
    </div>
  );
};

export default UseState;
