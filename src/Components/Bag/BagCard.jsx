import React from "react";
import "./Bag.css";
import { useStateContext } from "../../context";
import { useAuth } from "../../context/auth-context";
import { removeProduct } from "../../server-requests";

export const BagCard = ({ product }) => {
  const { dispatch } = useStateContext();

  const {
    userAuthState: { isLoggedIn },
  } = useAuth();

  return (
    <>
      <div key={product.id} className="bagItem">
        <div className="bagItemGrid">
          <div className="productImage">
            <img src={product.image} alt="productImage"></img>
          </div>
          <div className="productDetail">
            <h1 className="productName mT1 text-left">{product.name}</h1>
            <h1
              className="productPrice"
              style={{ textAlign: "left", display: "block" }}
            >
              Rs {product.discountedPrice}
            </h1>

            <div className="buttonRow">
              <button
                className="button-extra increment"
                onClick={() =>
                  dispatch({ type: "INCREMENT_QTY", payload: product })
                }
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
                type="button"
                className="button button-secondary"
                onClick={() => {
                  removeProduct(product, dispatch);
                }}
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
