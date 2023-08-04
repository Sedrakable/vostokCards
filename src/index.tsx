import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./css/index.scss";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
