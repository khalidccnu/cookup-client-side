import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { AuthContext } from "../context/Auth.jsx";
import anmFood from "../asset/food.json";

const Banner = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <section className="py-5">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row md:items-center max-w-4xl mx-auto md:space-x-6">
          <div className="mt-6 md:mt-0 text-center md:text-start">
            <h2 className="font-semibold text-5xl mb-3">
              Home Made Food at your doorstep
            </h2>
            {userInfo?.uid ? (
              <span>
                Hi{userInfo.displayName ? " " + userInfo.displayName : ""}, Glad
                to see you here!
              </span>
            ) : (
              <span>
                Already a member? <Link to={"/login"}>Log In</Link>
              </span>
            )}
          </div>
          <div>
            <Lottie animationData={anmFood} loop={true} className="max-w-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
