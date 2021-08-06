import React from "react";
import "../Bag/Bag.css";
import { useStateContext } from "../../context";
import axios from "axios";

export const PriceDetails = () => {
  const {
    state: { itemsInBag },
  } = useStateContext();

  const itemsPrice = itemsInBag.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.product.discountedPrice;
  }, 0);

  const taxPrice = itemsPrice * 0.1;
  const totalPrice = itemsPrice + taxPrice;

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post(
      "https://yoga-store-api.suyashpradhan.repl.co/payment/orders",
      {
        amount: totalPrice,
      }
    );

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_7PR0eRi6seK2IP", // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: currency,
      name: "Suyash Pradhan",
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "https://yoga-store-api.suyashpradhan.repl.co/payment/orders",
          data
        );

        alert(result.data.msg);
      },
      prefill: {
        name: "Suyash Pradhan",
        email: "suyash@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Suyash Pradhan Corporate Office",
      },
      theme: {
        color: "#0c6ff9",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

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
          <button
            className="button w-100 mT1 block button-secondary"
            onClick={displayRazorpay}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};
