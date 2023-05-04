import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { chefRecipes } from "./utility/index.js";
import Auth from "./context/Auth.jsx";
import LogOffRoute from "./component/LogOffRoute.jsx";
import PrivateRoute from "./component/PrivateRoute.jsx";
import Root from "./route/Root.jsx";
import Error from "./route/Error.jsx";
import Home from "./route/Home.jsx";
import ChefRecipes from "./route/ChefRecipes.jsx";
import Blog from "./route/Blog.jsx";
import Login from "./route/Login.jsx";
import Signup from "./route/Signup.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Auth>
          <Root />
        </Auth>
      ),
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: (_) => fetch(`https://cookup-server-side.vercel.app/chefs`),
        },
        {
          path: "/chef-recipes/:id",
          element: (
            <PrivateRoute>
              <ChefRecipes />
            </PrivateRoute>
          ),
          loader: ({ params }) => chefRecipes(params.id),
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/login",
          element: (
            <LogOffRoute>
              <Login />
            </LogOffRoute>
          ),
        },
        {
          path: "/signup",
          element: (
            <LogOffRoute>
              <Signup />
            </LogOffRoute>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
