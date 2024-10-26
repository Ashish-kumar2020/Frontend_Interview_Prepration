import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import PostList, { postLoader } from "./component/PostList";
import PostComment from "./component/PostComment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/posts",
        element: <PostList />,
        loader: postLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostComment />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
