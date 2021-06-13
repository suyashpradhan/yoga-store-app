import React from "react";
import "./Header.css";
import LogoMain from "../../assets/images/LogoMain.svg";
import wishlist from "../../assets/images/wishlist.svg";
import bag from "../../assets/images/bag.svg";
import { useStateContext } from "../../Context";
import { Link } from "react-router-dom";

export const Header = () => {
  const {
    state: { itemsInBag },
  } = useStateContext();

  return (
    <>
      <header className="header pT1 pB1">
        <nav className="nav wrapper-fluid">
          <div className="navLeftnavBrand">
            <Link to="/">
              <img src={LogoMain} alt="yoga_life" className="logo"></img>
            </Link>
          </div>

          <div className="navMiddle">
            <div className="searchBox">
              <input
                type="text"
                placeholder="Search Items"
                className="searchField"
              />
            </div>
          </div>

          <div className="navRight ">
            <div className="wishlist mR2">
              <Link to="/wishlist">
                <img src={wishlist} alt="wishlist" className="icons"></img>
                <h2 className="iconText">Wishlist</h2>
              </Link>
            </div>
            <div className="bag mR2">
              <Link to="/bag">
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
            <div className="register">
              <Link to="/login" className="actionButtons">
                Sign in
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
