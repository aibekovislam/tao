import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayouts() {
  return (
    <div style={{ maxWidth: "91vw", margin: "0 auto", position: "relative" }}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayouts;
