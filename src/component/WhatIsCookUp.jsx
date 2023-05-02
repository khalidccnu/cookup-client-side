import React from "react";
import anmCooks from "../asset/cooks.gif";
import anmHMFoods from "../asset/home-made-foods.gif";
import anmEHygiene from "../asset/ensured-hygene.gif";
import anmGTaste from "../asset/guaranteed-taste.gif";

const WhatIsCookUp = () => {
  return (
    <section className="pt-20 pb-5 text-center">
      <div className="container">
        <h2 className="font-semibold text-2xl mb-10">What is CookUp</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          <div>
            <img src={anmCooks} alt="" className="max-w-[10rem] mx-auto mb-2" />
            <h4 className="font-medium">15+ Cooks</h4>
          </div>
          <div>
            <img
              src={anmHMFoods}
              alt=""
              className="max-w-[10rem] mx-auto mb-2"
            />
            <h4 className="font-medium">Homemade Foods</h4>
          </div>
          <div>
            <img
              src={anmEHygiene}
              alt=""
              className="max-w-[10rem] mx-auto mb-2"
            />
            <h4 className="font-medium">Ensured Hygiene</h4>
          </div>
          <div>
            <img
              src={anmGTaste}
              alt=""
              className="max-w-[10rem] mx-auto mb-2"
            />
            <h4 className="font-medium">Guaranteed Taste</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCookUp;
