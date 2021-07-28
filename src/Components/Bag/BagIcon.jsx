import React from "react";
import { useStateContext } from "../../context";

export const BagIcon = (props) => {
  console.log(props.product);
  const { dispatch } = useStateContext();

  return (
    <div className="cardFooter block">
      <button
        className="button button-secondary"
        onClick={() =>
          dispatch({ type: "ADD_TO_BAG", payload: props.product, route: "BAG" })
        }
      >
        Add to Bag
      </button>
    </div>
  );
};
