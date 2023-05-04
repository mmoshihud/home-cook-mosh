import { createBrowserRouter } from "react-router-dom";
import ChefDetails from "../pages/chef/ChefDetails";
import ChefLists from "../pages/chef/ChefLists";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/sign-up/SignUp";
import ErrorPage from "../pages/error/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/chef"),
      },
      {
        path: "/chefs",
        element: <ChefLists />,
        loader: () => fetch("http://localhost:5000/chef"),
      },
      {
        path: "chef/:id",
        element: <ChefDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
]);

export default router;
