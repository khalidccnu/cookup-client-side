import React from "react";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";

const Chef = ({ chef }) => {
  const navigate = useNavigate();
  const {
    id,
    name,
    year_of_experience: yoe,
    number_of_recipe: nor,
    like,
    photo,
  } = chef;

  return (
    <div className="card bg-base-200/70">
      <figure className="px-10 pt-10">
        <LazyLoad height={128}>
          <img src={photo} alt="" className="w-32 h-32 rounded-xl" />
        </LazyLoad>
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{name}</h2>
        <div className="space-x-5">
          <span>Experience: {yoe} Year</span>
          <span>Recipe: {nor}</span>
        </div>
        <span>Like: {like}</span>
        <div className="card-actions">
          <button
            className="btn btn-sm btn-outline"
            onClick={(_) => navigate("/chef-recipes/" + id)}
          >
            View Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chef;
