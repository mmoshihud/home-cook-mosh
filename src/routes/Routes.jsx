import { createBrowserRouter } from "react-router-dom";
import ChefDetails from "../pages/chef/ChefDetails";
import ChefLists from "../pages/chef/ChefLists";
import ErrorPage from "../pages/error/404";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Main from "../layouts/Main";
import SignUp from "../pages/sign-up/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://chef-backend-eta.vercel.app/chef"),
      },
      {
        path: "/chefs",
        element: <ChefLists />,
        loader: () => fetch("https://chef-backend-eta.vercel.app/chef"),
      },
      {
        path: "chef/:id",
        element: <ChefDetails />,
        loader: ({ params }) =>
          fetch(`https://chef-backend-eta.vercel.app/chef/${params.id}`),
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
