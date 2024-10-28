import "./App.css";
import AppLayout from "./component/AppLayout";
// import Header from "./component/Header";
import Home from "./component/Home";
import Login from "./component/Login";
import PostComments from "./component/PostComments";
import PostList, { postLoader } from "./component/PostList";
import RequireAuth from "./component/RequireAuth";
import Signup from "./component/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/", // Root path
        element: <Home />,
      },

      {
        path: "/auth",
        element: <Home />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
      {
        path: "/posts",
        element: (
          <RequireAuth>
            <PostList />
          </RequireAuth>
        ),
        loader: postLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostComments />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
