import React from "react";
import { useStateContext } from "../../context";
import { actionOnBag } from "../../server-requests";
import { useAuth } from "../../context/auth-context";

export const AddToBag = ({ product }) => {
  const { dispatch } = useStateContext();

  const {
    userAuthState: { isLoggedIn },
  } = useAuth();

  return (
    <>
      <button
        type="button"
        className={"button button-secondary button-width"}
        onClick={() => {
          isLoggedIn
            ? actionOnBag(product, dispatch)
            : dispatch({
                type: "SHOW_TOAST",
                payload: "Please Login to add product in bag",
              });
        }}
      >
        Add to Bag
      </button>
    </>
  );
};
