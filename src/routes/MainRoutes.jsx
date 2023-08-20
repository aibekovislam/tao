import React from "react";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import DishesList from "../pages/DishesList";
import AuthPage from "../pages/AuthPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<HomePage />}></Route>
      </Route>
      <Route path="/admin" element={<AdminPage />}></Route>
      <Route path="/admin/dishes" element={<DishesList />}></Route>
      <Route path="/auth" element={<AuthPage />}></Route>
    </Routes>
  );
}

export default MainRoutes;
