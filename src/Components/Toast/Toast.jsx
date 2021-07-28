import { useEffect } from "react";
import { useToastContext } from "../../context";

export const Toast = () => {
  const {
    state: { toastMessage },
    toastDispatch,
  } = useToastContext();

  const closeToast = () => {
    toastDispatch({ type: "SHOW_TOAST", payload: null });
  };

  useEffect(() => {
    const timeID = setTimeout(closeToast, 2000);
    return () => clearTimeout(timeID);
  });

  return (
    <div className="toast">
      <h3 className="toastMessage">{toastMessage}</h3>
      <button className="toastIcon">X</button>
    </div>
  );
};
