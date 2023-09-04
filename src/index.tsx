import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./css/index.scss";
import { ParallaxProvider } from "react-scroll-parallax";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>
);
