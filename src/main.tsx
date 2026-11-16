import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./User";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
