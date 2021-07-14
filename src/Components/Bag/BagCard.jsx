import React from "react";
import "./Bag.css";
import { useStateContext } from "../../Context";
import { useAuth } from "../../Context/auth-context";
import { actionOnBag } from "../../server-requests";
import { useToastHook } from "../../CustomHooks/useToast";

export const BagCard = ({ product }) => {
  const { dispatch } = useStateContext();
  const toast = useToastHook(3000);

  const {
    userAuthState: { isLoggedIn },
  } = useAuth();
  console.log(product);

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
                  actionOnBag(product, "REMOVE_PRODUCT_FROM_BAG", dispatch);
                  dispatch({ type: "REMOVE_PRODUCT", payload: product });
                  toast("success", "Product Removed");
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
