import React, { useEffect } from "react";
import "./Bag.css";
import EmptyBag from "../../assets/images/empty-bag.svg";
import { useStateContext } from "../../Context";
import { BagCard } from "./BagCard";
import { PriceDetails } from "./PriceDetails";
import { Link } from "react-router-dom";
import axios from "axios";

export const Bag = () => {
  const {
    state: { itemsInBag },
    dispatch,
  } = useStateContext();

  console.log(itemsInBag);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://apiyogastore.suyashpradhan.repl.co/cart`
      );
      dispatch({ type: "SET_BAG", payload: response.data });
    })();
  }, [dispatch]);

  return (
    <div className="wrapper wrapper-fluid">
      <div className="bagBody">
        {itemsInBag.length !== 0 ? (
          <>
            <h1 className="bagMainTitle">
              My Shopping Bag <span> ({itemsInBag.length} items) </span>
            </h1>
            <div className="bagRow">
              <BagCard />
              <PriceDetails />
            </div>
          </>
        ) : (
          <>
            <img src={EmptyBag} alt="empty-bag" className="secondaryIcon"></img>
            <h1 className="bagMainTitle">YOUR BAG IS EMPTY</h1>
            <p className="bagSubTitle">
              There is nothing in your bag. Let's add some items
            </p>
            <Link to="/wishlist">
              <button className="button button-secondary">
                ADD ITEMS FROM WISHLIST
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
