import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../context/Auth.jsx";

const PrivateRoute = ({ children }) => {
  const { userInfo } = useContext(AuthContext);
  const location = useLocation();

  return userInfo?.uid ? (
    children
  ) : (
    <Navigate to="/login" state={{ fromURL: location }} replace></Navigate>
  );
};

export default PrivateRoute;
