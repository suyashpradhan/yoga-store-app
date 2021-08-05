import { useEffect } from "react";
import { useStateContext } from "../../context";
import "./Toast.css";

export const Toast = (type) => {
  const {
    state: { toastMessage },
    dispatch,
  } = useStateContext();

  const closeToast = () => {
    dispatch({ type: "SHOW_TOAST", payload: null });
  };

  useEffect(() => {
    const timeID = setTimeout(closeToast, 3000);
    return () => clearTimeout(timeID);
  });

  return (
    <>
      <div className={type === "error" ? "toast-error" : "toast-success"}>
        <p className="toastMessage">{toastMessage}</p>
      </div>
    </>
  );
};
