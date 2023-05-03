import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../context/Auth.jsx";

const PrivateRoute = ({ children }) => {
  const { loading, userInfo } = useContext(AuthContext);
  const location = useLocation();

  return loading ? (
    ""
  ) : userInfo?.uid ? (
    children
  ) : (
    <Navigate to="/login" state={{ fromURL: location }} replace></Navigate>
  );
};

export default PrivateRoute;
