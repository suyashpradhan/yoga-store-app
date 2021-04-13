import React from "react";
import { Link } from "react-router-dom";
import wishlist from "../../assets/images/wishlist.svg";
import wishlistFilled from "../../assets/images/wishlist-filled.svg";
import starIcon from "../../assets/images/star.svg";
import { useStateContext } from "../../Context";

export const Product = ({ product }) => {
  const {
    state: { itemsInBag, itemsInWishlist },
    dispatch,
  } = useStateContext();

  const itemExist = (product) => {
    return itemsInBag.find((item) => item.id === product.id);
  };

  const itemsInWishlistExists = (product) => {
    return itemsInWishlist.find((item) => item.id === product.id);
  };

  return (
    <div className="card" key={product.id}>
      <div className="cardTop">
        <img src={product.image} alt={product.name} className="cardImage" />
      </div>
      <div className="cardBody">
        <div className="cardTitleRow">
          <div>
            <h1 className="productName">
              <span style={{ marginRight: "0.2rem" }}>{product.brand}</span>
              {product.name}
            </h1>
            <h2 className="productCategory">{product.category}</h2>
          </div>
          {itemsInWishlistExists(product) ? (
            <button
              className="iconWrap"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product })
              }
            >
              <img src={wishlistFilled} alt="" className="cardIcon" />
            </button>
          ) : (
            <button
              className="iconWrap"
              onClick={() =>
                dispatch({ type: "ADD_TO_WISHLIST", payload: product })
              }
            >
              <img src={wishlist} alt="" className="cardIcon" />
            </button>
          )}
        </div>

        <h3 className="productPrice">Rs {product.price}</h3>
        <h4 className="actualPrice">Rs {product.actualPrice}</h4>
        <h4 className="offer">{product.offer} % </h4>
        <span className="productRating">
          {product.ratings} / 5.0
          <img src={starIcon} alt="ratings" className="cardIcon-sm"></img>
        </span>
        <div className="cardFooter block">
          {itemExist(product) ? (
            <Link to="/bag">
              <button className="button button-primary">GO TO BAG</button>
            </Link>
          ) : (
            <button
              type="button"
              className="button button-secondary"
              onClick={() => dispatch({ type: "ADD_TO_BAG", payload: product })}
            >
              ADD TO BAG
            </button>
          )}
        </div>
        {/* <div className="outOfStock">
          <h1 className="outOfStockText">
            Out of
            <br />
            stock
          </h1>
        </div> */}
      </div>
    </div>
  );
};
