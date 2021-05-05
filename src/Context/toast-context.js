import React, { useReducer, createContext, useContext } from "react";
import { toastReducer } from "./toast-reducer";
import uuid from "react-uuid";

export const ToastContext = createContext();

export const ToastContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, [
    {
      id: uuid(),
      message: "Products added",
    },
  ]);

  return (
    <ToastContext.Provider value={{ state, dispatch }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContext);
