import React from "react";
import logo from "../assets/images/logo.svg";

export const Logo = () => {
  return (
    <>
      <div className="navBrand">
        <img src={logo} alt="yoga_life" className="logo"></img>
        <h2 className="logoTitle">YogaLife</h2>
      </div>
    </>
  );
};
