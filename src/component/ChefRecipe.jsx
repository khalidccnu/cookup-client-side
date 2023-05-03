import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaPlusCircle, FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";
import { addFavorite, getFavorite } from "../utility/index.js";

const ChefRecipe = ({ recipe }) => {
  const [isFavorite, setFavorite] = useState(false);
  const { id, name, ingredient, cooking_method, rating } = recipe;

  const favorite = (id, name) => {
    addFavorite(id);
    setFavorite(true);
    toast.success(name + " is added!");
  };

  const checkFavorite = (id) => {
    return getFavorite().find((e) => e === id);
  };

  useEffect((_) => {
    if (checkFavorite(id)) setFavorite(true);
  }, []);

  return (
    <div className="relative card bg-base-200/70 text-neutral-900">
      <button
        role="button"
        className={`absolute top-4 right-4 ${
          isFavorite ? "text-gray-400/60" : ""
        }`}
        title={!isFavorite ? "Add to Favorite" : ""}
        onClick={(_) => favorite(id, name)}
        disabled={isFavorite}
      >
        <FaPlusCircle />
      </button>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <small className="inline-flex -mt-3 mb-3 text-[0.6rem] text-yellow-400">
          {Array(5)
            .fill(0)
            .map((_, idx) => {
              return idx < Math.trunc(rating) ? (
                <FaStar key={idx} />
              ) : !Number.isInteger(rating) && idx === Math.trunc(rating) ? (
                <FaStarHalfAlt key={idx} />
              ) : (
                <FaRegStar key={idx} />
              );
            })}
        </small>
        <ul className="list-disc list-inside">
          <h4 className="font-semibold">Ingredient:</h4>
          {ingredient.map((e, idx) => (
            <li key={idx}>{e}</li>
          ))}
        </ul>
        <ul className="list-disc list-inside">
          <h4 className="font-semibold">Cooking Method:</h4>
          {cooking_method.map((e, idx) => (
            <li key={idx}>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChefRecipe;
