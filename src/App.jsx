import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { chefRecipes } from "./utility/index.js";
import Auth from "./context/Auth.jsx";
import Root from "./route/Root.jsx";
import Error from "./route/Error.jsx";
import Home from "./route/Home.jsx";
import ChefRecipes from "./route/ChefRecipes.jsx";
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
          element: <ChefRecipes />,
          loader: ({ params }) => chefRecipes(params.id),
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
