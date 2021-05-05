import React from "react";
import banner from "../../assets/images/banner.jpg";
import { useStateContext } from "../../Context";
import mats from "../../assets/images/mats.jpg";
import blanket from "../../assets/images/blanket.jpg";
import clothing from "../../assets/images/clothing.jpg";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const { dispatch } = useStateContext();

  return (
    <>
      <section className="banner">
        <Link to="/products">
          <button onClick={() => dispatch({ payload: "products" })}>
            <img
              src={banner}
              alt="yoga_life"
              className="banner img-fluid"
            ></img>
          </button>
        </Link>
      </section>
      <section className="sectionCategories pT4 pB4">
        <div className="wrapper-fluid">
          <h2 className="sectionTitle">Shop by category</h2>
          <div className="innerSection">
            <div className="categories categoryOne">
              <div className="overlay">
                <img src={mats} alt="mats" className="sectionImage"></img>
                <h3 className="overlayText">Yoga Mats</h3>
              </div>
              <Link to="/yoga-mats">
                <button className="button button-secondary block">
                  SHOP NOW
                </button>
              </Link>
            </div>
            <div className="categories categoryTwo">
              <div className="overlay">
                <div>
                  <img src={blanket} alt="mats" className="sectionImage"></img>
                  <h3 className="overlayText">Blankets</h3>
                </div>
              </div>
              <button className="button button-secondary block">
                SHOP NOW
              </button>
            </div>
            <div className="categories categoryThree">
              <div className="overlay">
                <div>
                  <img src={clothing} alt="mats" className="sectionImage"></img>
                  <h3 className="overlayText">
                    Stay comfortable yet stylish while doing yoga.
                  </h3>
                </div>
              </div>
              <button className="button button-secondary block">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
