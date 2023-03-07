import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//stylesheet
import "./assets/styles/base.module.scss";

//fonts
import "./fonts/Lato-Regular.ttf";
import "./fonts/Lato-Black.ttf";
import "./fonts/Lato-Bold.ttf";
import "./fonts/Lato-Light.ttf";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
