import React from "react";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
}

export default MainRoutes;
