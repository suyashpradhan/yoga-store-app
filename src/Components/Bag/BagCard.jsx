import React from "react";
import "./Bag.css";
import { useStateContext } from "../../Context";
import {
  removeItemFromBag,
  incrementQuantity,
} from "../../server-requests/index";

export const BagCard = ({ product }) => {
  const { dispatch } = useStateContext();
  return (
    <>
      <div key={product.id} className="bagItem">
        <div className="bagItemGrid">
          <div className="productImage">
            <img src={product.image} alt="productImage"></img>
          </div>
          <div className="productDetail">
            <h1 className="productName mT1 text-left">{product.name}</h1>
            <h1 className="productPrice text-left">
              Rs {product.discountedPrice}
            </h1>

            <div className="buttonRow">
              <button
                className="button-extra increment"
                onClick={() => incrementQuantity(product, dispatch)}
              >
                +
              </button>
              <span className="product-quantity">{product.quantity}</span>
              <button
                className="button-extra decrement"
                onClick={() =>
                  dispatch({ type: "DECREMENT_QTY", payload: product })
                }
              >
                -
              </button>
            </div>

            <div className="bagFooter mT1 mB1 block text-left">
              <button
                className="button button-secondary"
                onClick={() => removeItemFromBag(product, dispatch)}
              >
                REMOVE ITEM
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
