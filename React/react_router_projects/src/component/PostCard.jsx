import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <h2>{post.body}</h2>

      <Link to={`/posts/${post.id}`}>View Comments</Link>
    </div>
  );
};

export default PostCard;
