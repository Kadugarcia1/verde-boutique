import React from "react";
import { createRoot } from "react-dom/client";
import { Journal as App } from "./Journal.jsx";
import "./journal.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
