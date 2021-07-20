import { useEffect } from "react";
import { useToastContext } from "../../Context/toast-context";

export const Toast = () => {
  const { toast, setToast } = useToastContext();

  const closeToast = () => {
    setToast();
  };

  useEffect(() => {
    const timeID = setTimeout(closeToast, 2000);
    return () => clearTimeout(timeID);
  });

  return (
    <div className="toastWrapper">
      <h3 className="toast-message">{toast}</h3>
    </div>
  );
};
