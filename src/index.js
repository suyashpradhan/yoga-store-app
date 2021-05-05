import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App.jsx";
import { CartContextProvider } from "./Context";
import { ToastContextProvider } from "./Context/toast-context";
import { BrowserRouter as Router } from "react-router-dom";

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
