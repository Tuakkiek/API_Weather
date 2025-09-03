import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Body/Banner";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <App/>

  </StrictMode>
);
