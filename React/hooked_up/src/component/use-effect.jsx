import React, { useState, useEffect } from "react";
// https://jsonplaceholder.typicode.com/posts
const UseEffectHook = () => {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  }
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      Posts
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectHook;
