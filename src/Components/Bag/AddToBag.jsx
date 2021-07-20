import React from "react";
import { useStateContext } from "../../Context";
import { useToastHook } from "../../CustomHooks/useToast";
import { actionOnBag } from "../../server-requests";

export const AddToBag = ({ product }) => {
  const toast = useToastHook(3000);

  const {
    state: { itemsInBag },
    dispatch,
  } = useStateContext();

  return (
    <>
      <button
        type="button"
        className={"button button-secondary button-width"}
        onClick={() => {
          actionOnBag(product, dispatch);
          toast("success", "Added product in bag");
        }}
      >
        Add to Bag
      </button>
    </>
  );
};
