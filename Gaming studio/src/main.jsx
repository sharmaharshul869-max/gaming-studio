import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./App.css"; // Agar saari CSS App.css me hai

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);