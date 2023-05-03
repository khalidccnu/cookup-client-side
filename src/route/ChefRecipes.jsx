import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefBanner from "../component/ChefBanner.jsx";
import ChefRecipesCardArea from "../component/ChefRecipesCardArea.jsx";

const ChefRecipes = () => {
  const [chef, recipes] = useLoaderData();

  return (
    <>
      <ChefBanner chef={chef} />
      <ChefRecipesCardArea recipes={recipes} />
    </>
  );
};

export default ChefRecipes;
