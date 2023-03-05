import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//stylesheet
import "./assets/styles/base.module.scss";

//fonts
import "./fonts/Lato-Regular.ttf";
import "./fonts/Lato-Black.ttf";
import "./fonts/Lato-Bold.ttf";
import "./fonts/Lato-Light.ttf";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
