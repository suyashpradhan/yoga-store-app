import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { setupMockServer } from "./mock-server/server.js";
import { CartContextProvider } from "./Context";

setupMockServer();

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
