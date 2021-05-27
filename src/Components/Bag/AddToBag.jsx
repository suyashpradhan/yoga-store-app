import React from "react";
import { addItemInBag } from "../../server-requests/index";
import { useStateContext } from "../../Context";
import { isAlreadyAdded } from "../../utils";
import { Link } from "react-router-dom";

export const AddToBag = ({ product }) => {
  const {
    state: { itemsInBag },
    dispatch,
  } = useStateContext();

  return (
    <>
      {isAlreadyAdded(itemsInBag, product._id) ? (
        <Link to="/bag">
          <button className="button button-primary  flex-1 mR1">
            GO TO BAG
          </button>
        </Link>
      ) : (
        <button
          type="button"
          className="button button-secondary flex-1 mR1"
          onClick={() => addItemInBag(product, dispatch)}
        >
          ADD TO BAG
        </button>
      )}
    </>
  );
};
