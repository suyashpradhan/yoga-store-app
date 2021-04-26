import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App.jsx";
import { setupMockServer } from "./mock-server/server.js";
import { CartContextProvider } from "./Context";
import { ToastContextProvider } from "./Context/toast-context";
import { BrowserRouter as Router } from "react-router-dom";

setupMockServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToastContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ToastContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
