import React from "react";
import { useStateContext } from "../../context";
import { actionOnBag } from "../../server-requests";

export const AddToBag = ({ product }) => {
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
        }}
      >
        Add to Bag
      </button>
    </>
  );
};
