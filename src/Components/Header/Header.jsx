import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.svg";
import wishlist from "../../assets/images/wishlist.svg";
import bag from "../../assets/images/bag.svg";
import { useStateContext } from "../../Context";

export const Header = () => {
  const { state, dispatch } = useStateContext();

  return (
    <>
      <header className="header pT1 pB1">
        <nav className="nav wrapper-fluid">
          <button onClick={() => dispatch({ type: "ROUTE", payload: "home" })}>
            <div className="navBrand">
              <img src={logo} alt="yoga_life" className="logo"></img>
              <h2 className="logoTitle">YogaLife</h2>
            </div>
          </button>
          {/* <form className="searchForm">
            <input
              type="text"
              placeholder="Search for items, brand etc..."
              className="formField"
            ></input>
          </form> */}
          <div className="navWrap wishlist">
            <button
              onClick={() => dispatch({ type: "ROUTE", payload: "wishlist" })}
            >
              <img src={wishlist} alt="wishlist" className="icons"></img>
              <h2 className="iconText">Wishlist</h2>
            </button>
          </div>
          <div className="navWrap bag">
            <button onClick={() => dispatch({ type: "ROUTE", payload: "bag" })}>
              <img src={bag} alt="wishlist" className="icons"></img>
              <h2 className="iconText">Bag</h2>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
