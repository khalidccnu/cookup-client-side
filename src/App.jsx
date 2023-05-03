import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./route/Root.jsx";
import Home from "./route/Home.jsx";
import ChefRecipes from "./route/ChefRecipes.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: (_) => fetch(`https://cookup-server-side.vercel.app/chefs`),
        },
        {
          path: "/chef-recipes/:id",
          element: <ChefRecipes />,
          loader: ({ params }) =>
            fetch(`https://cookup-server-side.vercel.app/chefs/${params.id}`),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
