import React, { useState, useEffect } from "react";
import customUseEffect from "../Hooks/useEffectCustom";
// https://jsonplaceholder.typicode.com/posts
const UseEffectHook = () => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  }
  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  customUseEffect(() => {
    console.log("Custom UseEffect Re-renders : ", count);
  }, [count]);
  return (
    <div>
      Count : {count}
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decremnet</button>
      {/* Posts
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default UseEffectHook;
