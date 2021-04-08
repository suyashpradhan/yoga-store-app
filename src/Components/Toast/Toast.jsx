import React from "react";
import { useToastContext } from "../../Context/toast-context";
import "./Toast.css";
import CloseButton from "../../assets/images/close.svg";

export const Toast = ({ interval }) => {
  const { state, dispatch } = useToastContext();

  return (
    <>
      {state.map(({ id, message }) => {
        if (interval) {
          setInterval(() => {
            dispatch({ type: "CLOSE_TOAST", payload: id });
          }, interval);
        }
        return (
          <div className="toastContainer" key={id}>
            <h2 className="toastTitle">{message}</h2>
            <img
              className="toastIcon"
              src={CloseButton}
              alt="close-button"
              onClick={() => dispatch({ type: "CLOSE_TOAST", payload: id })}
            ></img>
          </div>
        );
      })}
    </>
  );
};
