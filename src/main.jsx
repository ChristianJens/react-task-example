import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// Asegurarse que ya se esta importando los estilos
import "./index.css";

import { TaskContextProvider } from "./context/TaskContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);
