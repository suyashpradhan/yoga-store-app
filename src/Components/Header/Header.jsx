import React from "react";
import "./Header.css";
import LogoMain from "../../assets/images/LogoMain.svg";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { useStateContext } from "../../Context";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";
import { useToastHook } from "../../CustomHooks/useToast";

export const Header = () => {
  const toast = useToastHook(3000);

  const {
    state: { itemsInBag, searchedText },
    dispatch,
  } = useStateContext();

  const {
    userAuthState: { isLoggedIn },
    userAuthDispatch,
  } = useAuth();

  const handleLogout = () => {
    toast("success", "Succesfully Logged out");
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

          <div className="navMiddle">
            <div className="searchBox">
              <input
                type="text"
                placeholder="Search Items"
                className="searchField"
                value={searchedText}
                onChange={(e) =>
                  dispatch({
                    type: "SEARCH_PRODUCT",
                    payload: e.target.value,
                  })
                }
              />
            </div>
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
              <div className="register">
                <Link to="/login" className="actionButtons">
                  Sign in
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};
