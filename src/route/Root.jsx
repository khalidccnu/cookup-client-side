import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../component/Nav.jsx";

const Root = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Root;
