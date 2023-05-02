import React from "react";
import Chef from "./Chef.jsx";

const Chefs = ({ chefs }) => {
  return (
    <section className="pt-20 pb-5 text-center">
      <div className="container">
        <h2 className="font-semibold text-2xl mb-10">Cook Spotlight</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {chefs.map((chef) => (
            <Chef key={chef.id} chef={chef} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
