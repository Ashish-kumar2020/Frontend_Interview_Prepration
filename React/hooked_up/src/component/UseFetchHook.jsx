import React from "react";
import usefetchCustom from "../custom_hooks/useFetchHook";

const UseFetchHook = () => {
  const { data, loading, error } = usefetchCustom(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error : {error.message}</div>;
  }
  return (
    <div>
      Post List
      {data && (
        <ul>
          {data.slice(0, 5).map((post) => (
            <li key={post.id}>
              <h4>{post.title}</h4>
              <h4>{post.body}</h4>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UseFetchHook;
