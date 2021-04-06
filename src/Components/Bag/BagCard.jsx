import React from "react";
import "./Bag.css";
import { useStateContext } from "../../Context";

export const BagCard = () => {
  const {
    state: { itemsInBag },
    dispatch,
  } = useStateContext();

  console.log(itemsInBag);
  return (
    <>
      <div className="bagItem">
        {itemsInBag.map((product) => {
          return (
            <div key={product.id} className="bagItem">
              <div className="bagItemGrid">
                <div className="productImage">
                  <img src={product.image} alt="productImage"></img>
                </div>
                <div className="productDetail">
                  <h1 className="productName mT1 text-left">{product.name}</h1>
                  <h1 className="productPrice text-left">Rs {product.price}</h1>

                  <div className="buttonRow">
                    <button
                      className="button-extra increment"
                      onClick={() =>
                        dispatch({ type: "INCREMENT_QTY", payload: product })
                      }
                    >
                      +
                    </button>
                    <span className="product-quantity">
                      {product.productQuantity}
                    </span>
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
                      onClick={() =>
                        dispatch({ type: "REMOVE_ITEM", payload: product })
                      }
                    >
                      REMOVE ITEM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
