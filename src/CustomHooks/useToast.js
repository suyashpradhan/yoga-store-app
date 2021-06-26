import { useToastContext } from "../Context/toast-context";

export const useToastHook = (time) => {
  const { dispatch } = useToastContext();

  const toast = (type, message) => {
    const id = Date.now();
    dispatch({
      type: "ADD_TOAST",
      payload: {
        id,
        type,
        message,
      },
    });

    setTimeout(() => {
      dispatch({ type: "DELETE_TOAST", payload: id });
    }, time);
  };

  return toast;
};
