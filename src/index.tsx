import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes/routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* added router for pages navigation */}
    <Router />
  </React.StrictMode>
);
