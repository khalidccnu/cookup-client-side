import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../component/Banner.jsx";
import WhatIsCookUp from "../component/WhatIsCookUp.jsx";
import Chefs from "../component/Chefs.jsx";
import Testimonial from "../component/Testimonial.jsx";

const Home = () => {
  const chefs = useLoaderData();

  return (
    <>
      <Banner />
      <WhatIsCookUp />
      <Chefs chefs={chefs} />
      <Testimonial />
    </>
  );
};

export default Home;
