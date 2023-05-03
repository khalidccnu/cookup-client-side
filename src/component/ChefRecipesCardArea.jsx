import React from "react";
import ChefRecipe from "./ChefRecipe.jsx";

const ChefRecipesCardArea = ({ recipes }) => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 max-w-4xl mx-auto">
          {recipes.map((recipe) => (
            <ChefRecipe key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefRecipesCardArea;
