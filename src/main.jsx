import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ResetCss from "./ResetCss.styles.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResetCss />
    <App />
  </React.StrictMode>
);
