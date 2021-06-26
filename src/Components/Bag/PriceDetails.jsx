import React from "react";
import "./Bag.css";
import { useStateContext } from "../../Context";

export const PriceDetails = () => {
  const {
    state: { itemsInBag },
  } = useStateContext();

  const itemsPrice = itemsInBag.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.discountedPrice,
    0
  );

  const taxPrice = itemsPrice * 0.1;
  const totalPrice = itemsPrice + taxPrice;

  return (
    <div className="bagPrice">
      <div className="bagSummary">
        <h1 className="bagSummaryTitle">Price Details</h1>
        <div className="bagSummaryWrapper">
          <h2 className="bagText">Price ({itemsInBag.length} items)</h2>
          <h2 className="bagText item-price">Rs {itemsPrice.toFixed(2)}</h2>
        </div>
        <div className="bagSummaryWrapper taxWrapper">
          <h2 className="bagText taxInfo">Taxes and Charges</h2>
          <h2 className="bagText taxPrice">Rs {taxPrice.toFixed(2)}</h2>
        </div>
        <div className="bagSummaryWrapper billWrapper">
          <h1 className="bagText totatInfo">Total Price</h1>
          <h1 className="bagText totalAmount">Rs {totalPrice.toFixed(2)}</h1>
        </div>
        <div className="">
          <button className="button w-100 mT1 block button-secondary">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};
