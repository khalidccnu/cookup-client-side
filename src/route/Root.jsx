import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../component/Nav.jsx";
import Spinner from "../component/Spinner.jsx";
import Footer from "../component/Footer.jsx";

const Root = () => {
  return (
    <>
      <Nav />
      <Spinner>
        <Outlet />
      </Spinner>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Root;
