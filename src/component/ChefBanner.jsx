import React from "react";
import LazyLoad from "react-lazyload";
import Lottie from "lottie-react";
import anmChef from "../asset/chef.json";

const ChefBanner = ({ chef }) => {
  const {
    name,
    description,
    year_of_experience: yoe,
    number_of_recipe: nor,
    like,
    photo,
  } = chef;

  return (
    <section className="py-5">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row md:items-center max-w-4xl mx-auto">
          <div className="mt-6 md:mt-0 md:mr-6">
            <div className="flex items-center space-x-1.5">
              <LazyLoad height={56}>
                <img src={photo} alt="" className="w-14 h-14 rounded-xl" />
              </LazyLoad>
              <h2 className="font-semibold text-3xl">{name}</h2>
            </div>
            <p className="mt-1 font-medium">{description}</p>
            <div className="space-x-5 font-medium">
              <small>Experience: {yoe} Year</small>
              <small>Recipe: {nor}</small>
            </div>
            <small className="font-medium">Like: {like}</small>
          </div>
          <div className="md:ml-auto">
            <Lottie animationData={anmChef} loop={true} className="max-w-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefBanner;
