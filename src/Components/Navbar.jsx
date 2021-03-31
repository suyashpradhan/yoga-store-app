import React from "react";
import { Logo } from "./Logo";
import { Search } from "./Search";
import wishlist from "../assets/images/wishlist.svg";
import bag from "../assets/images/bag.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header className="header pT1 pB1">
        <nav className="nav wrapper-fluid">
          <Logo />
          <Search />
          <Link to="/wishlist">
            <a href="/wishlist" className="navWrap wishlist">
              <img src={wishlist} alt="wishlist" className="icons"></img>
              <h2 className="iconText">Wishlist</h2>
            </a>
          </Link>
          <Link to="/cart">
            <a href="/cart" className="navWrap bag">
              <img src={bag} alt="wishlist" className="icons"></img>
              <h2 className="iconText">Bag</h2>
            </a>
          </Link>
        </nav>
      </header>
    </>
  );
};
