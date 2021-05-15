import React from "react";
import "./Toast.css";

export const Toast = ({ message }) => {
  return (
    <>
      <div className="toast p1">
        <p className="toastMessage">{message}</p>
      </div>
    </>
  );
};
