import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducers";

const ToastContext = createContext();
const initialState = {
  toastMessage: "",
};

export const ToastContextProvider = ({ children }) => {
  const [toast, toastDispatch] = useReducer(reducer, initialState);

  return (
    <ToastContext.Provider value={{ toast, toastDispatch }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContext);
