import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.svg";
import wishlist from "../../assets/images/wishlist.svg";
import bag from "../../assets/images/bag.svg";
import { useStateContext } from "../../Context";
import { Link } from "react-router-dom";

export const Header = () => {
  const {
    state: { itemsInBag },
    dispatch,
  } = useStateContext();

  return (
    <>
      <header className="header pT1 pB1">
        <nav className="nav wrapper-fluid">
          <Link
            to="/"
            onClick={() => dispatch({ type: "ROUTE", payload: "home" })}
          >
            <div className="navBrand">
              <img src={logo} alt="yoga_life" className="logo"></img>
              <h2 className="logoTitle">YogaStore</h2>
            </div>
          </Link>
          <div className="navWrap wishlist">
            <Link
              to="/wishlist"
              onClick={() => dispatch({ type: "ROUTE", payload: "wishlist" })}
            >
              <img src={wishlist} alt="wishlist" className="icons"></img>
              <h2 className="iconText">Wishlist</h2>
            </Link>
          </div>
          <div className="navWrap bag">
            <Link
              to="/bag"
              onClick={() => dispatch({ type: "ROUTE", payload: "bag" })}
            >
              <img src={bag} alt="wishlist" className="icons"></img>
              <h2 className="iconText">
                Bag
                {itemsInBag.length >= 1 && (
                  <span className="roundedBadge badgeActive">
                    {itemsInBag.length}
                  </span>
                )}
              </h2>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};
