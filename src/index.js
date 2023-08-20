import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainContext from "./context/MainContext";
import AuthContext from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContext>
        <AuthContext>
          <App />
        </AuthContext>
      </MainContext>
    </BrowserRouter>
  </React.StrictMode>
);
