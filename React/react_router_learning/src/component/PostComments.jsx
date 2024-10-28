import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const PostComments = () => {
  const [comments, setComments] = useState([]);
  const [post, setpost] = useState(null);
  const [loading, setLoading] = useState(false);

  const { postId } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`),
      axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      ),
    ]);
    setpost(postResponse.data);
    setComments(commentsResponse.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [postId]);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {post && (
            <div className="post-card">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          )}
          <h2>Comments</h2>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.name}</strong>: {comment.body}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default PostComments;
