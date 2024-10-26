import React from "react";
import { useLoaderData } from "react-router-dom";
import PostCard from "./PostCard";
import axios from "axios";
const PostList = () => {
  const { data: posts } = useLoaderData();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export async function postLoader() {
  const resposne = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=50"
  );
  return resposne;
}

export default PostList;
