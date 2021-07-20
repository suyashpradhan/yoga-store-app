import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App.jsx";
import { StateContextProvider } from "./Context";
import { ToastContextProvider } from "./Context/toast-context";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/auth-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ToastContextProvider>
          <StateContextProvider>
            <App />
          </StateContextProvider>
        </ToastContextProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
