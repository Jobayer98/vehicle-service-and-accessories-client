import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Layout/Shared/Navigation/Navigation";
import Footer from "../Layout/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Navigation />
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};

export default Root;
