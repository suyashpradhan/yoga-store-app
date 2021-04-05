import React from "react";
import wishlist from "../../assets/images/wishlist.svg";
import { useStateContext } from "../../Context";

export const Product = ({ product }) => {
  const {
    state: { itemsInBag },
    dispatch,
  } = useStateContext();

  const itemExist = (product) => {
    return itemsInBag.find((item) => item.id === product.id);
  };

  const addItemsToBag = (e, product) => {
    e.preventDefault();
    dispatch({ type: "ADD_TO_BAG", payload: product });
  };

  return (
    <div className="card" key={product.id}>
      <div className="cardTop">
        <img src={product.image} alt={product.name} className="cardImage" />
      </div>
      <div className="cardBody">
        <div className="cardTitleRow">
          <div>
            <h1 className="productName">{product.name}</h1>
            <h2 className="productCategory">{product.category}</h2>
          </div>
          <button className="iconWrap">
            <img src={wishlist} alt="" className="cardIcon" />
          </button>
        </div>

        <h3 className="productPrice">Rs {product.price}</h3>
        {product.ratings <= 3 ? (
          <span className="productRating productRatingYellow">
            <i className="far fa-star productIcon"></i>
            {product.ratings}
          </span>
        ) : (
          <span className="productRating productRatingGreen">
            <i className="far fa-star productIcon"></i>
            {product.ratings}
          </span>
        )}
        <div className="cardFooter block">
          {itemExist(product) ? (
            <button className="button button-primary">GO TO BAG</button>
          ) : (
            <button
              type="button"
              className="button button-secondary"
              onClick={(e) => addItemsToBag(e, product)}
            >
              ADD TO BAG
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
