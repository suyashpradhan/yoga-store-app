import React from "react";
import "../../Components/Bag/Bag.css";
import EmptyBag from "../../assets/images/empty-bag.svg";
import { useStateContext } from "../../Context";
import { BagCard } from "../../Components/Bag/BagCard";
import { PriceDetails } from "../../Components/Bag/PriceDetails";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";
import { emptyBag } from "../../server-requests";
import { useToastHook } from "../../CustomHooks/useToast";

export const Bag = () => {
  const toast = useToastHook(3000);

  const {
    state: { itemsInBag },
    dispatch,
  } = useStateContext();

  const {
    userAuthState: { isLoggedIn },
  } = useAuth();

  const clearBag = async () => {
    if (isLoggedIn) {
      await emptyBag(dispatch);
    } else {
      toast("success", "Removed all products from Bag");
      dispatch({ type: "CLEAR_BAG" });
    }
  };

  return (
    <div className="wrapper wrapper-fluid">
      <div className="bagBody">
        {itemsInBag.length !== 0 ? (
          <>
            <h1 className="bagMainTitle">
              My Shopping Bag <span> ({itemsInBag.length} items) </span>
              <button onClick={clearBag} className="button button-danger">
                Clear Bag
              </button>
            </h1>
            <div className="bagRow">
              <div>
                {itemsInBag.map((product) => (
                  <BagCard key={product._id} product={product} />
                ))}
              </div>
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
            <Link to="/products">
              <button className="button button-secondary">
                Start Shopping
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
