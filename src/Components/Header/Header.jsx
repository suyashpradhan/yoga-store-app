import React from "react";
import "./Header.css";
import LogoMain from "../../assets/images/LogoMain.svg";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { useStateContext } from "../../context";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/";

export const Header = () => {
  const {
    state: { itemsInBag },
    dispatch,
  } = useStateContext();

  const {
    userAuthState: { isLoggedIn },
    userAuthDispatch,
  } = useAuth();

  const handleLogout = () => {
    localStorage?.removeItem("login");
    userAuthDispatch({
      type: "SET_LOGOUT",
    });
    dispatch({
      type: "SET_WISHLIST",
      payload: [],
    });
    dispatch({
      type: "SET_BAG",
      payload: [],
    });
  };

  return (
    <>
      <header className="header pT1 pB1">
        <nav className="nav wrapper-fluid">
          <div className="navLeftnavBrand">
            <Link to="/">
              <img src={LogoMain} alt="yoga_life" className="logo"></img>
            </Link>
          </div>
          <div className="navRight ">
            {isLoggedIn ? (
              <>
                <div className="wishlist mR2">
                  <Link to="/wishlist">
                    <AiOutlineHeart className="icons" />
                    <h2 className="iconText">Wishlist</h2>
                  </Link>
                </div>
                <div className="bag mR2">
                  <Link to="/bag">
                    <BiShoppingBag className="icons" />
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
                <div className="logout">
                  <button className="actionButtons" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/">
                  <h2 className="iconText mR1">Home</h2>
                </Link>
                <Link to="/products">
                  <h2 className="iconText mR1">Products</h2>
                </Link>
                <Link to="/wishlist">
                  <h2 className="iconText mR1">Wishlist</h2>
                </Link>
                <Link to="/login" className="actionButtons">
                  Sign in
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};
