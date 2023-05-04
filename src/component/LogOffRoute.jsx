import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/Auth.jsx";

const LogOffRoute = ({ children }) => {
  const { userInfo } = useContext(AuthContext);

  return !userInfo?.uid ? children : <Navigate to="/" replace></Navigate>;
};

export default LogOffRoute;
