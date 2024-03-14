import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout/Layout.jsx";
import HomePage from "./routes/homePage/HomePage.jsx";
import ListPage from "./routes/listPage/ListPage.jsx";
import SinglePage from "./routes/singlePage/SinglePage.jsx";
import Profile from "./routes/profile/Profile.jsx";
import Login from "./routes/login/Login.jsx";
import Register from "./routes/register/Register.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
