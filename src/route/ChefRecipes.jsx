import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefBanner from "../component/ChefBanner.jsx";

const ChefRecipes = () => {
  const chef = useLoaderData();

  return <ChefBanner chef={chef} />;
};

export default ChefRecipes;
