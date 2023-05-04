import React from "react";
import { useNavigation } from "react-router-dom";
import { Puff } from "react-loader-spinner";

const Spinner = ({ children }) => {
  const { state } = useNavigation();

  return state === "loading" ? (
    <div className="flex justify-center mt-5">
      <Puff height="40" width="40" color="#4bb75b" />
    </div>
  ) : (
    children
  );
};

export default Spinner;
