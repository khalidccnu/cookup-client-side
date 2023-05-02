import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./route/Root.jsx";
import Home from "./route/Home.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
