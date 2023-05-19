import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:min-h-[calc(100vh-70px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
