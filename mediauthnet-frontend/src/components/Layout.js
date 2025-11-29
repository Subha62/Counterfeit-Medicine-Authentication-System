import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./home/Navbar";
import Footer from "./home/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;

