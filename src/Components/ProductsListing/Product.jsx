import React from "react";
import wishlist from "../../assets/images/wishlist.svg";
import { useStateContext } from "../../Context";

export const Product = ({ product }) => {
  const { dispatch } = useStateContext();

  return (
    <div className="card">
      <div className="cardTop">
        <img src={product.image} alt={product.name} className="cardImage" />
      </div>
      <div className="cardBody">
        <div className="cardTitleRow">
          <div>
            <h1 className="productName">{product.name}</h1>
            <h2 className="productCategory">{product.category}</h2>
          </div>
          <button
            className="iconWrap"
            onClick={() =>
              dispatch({ type: "ADD_TO_WISHLIST", payload: product })
            }
          >
            <img src={wishlist} alt="" className="cardIcon" />
          </button>
        </div>

        <h3 className="productPrice">Rs {product.price}</h3>
        {product.ratings <= 3 ? (
          <span className="productRating productRatingYellow">
            <i class="far fa-star productIcon"></i>
            {product.ratings}
          </span>
        ) : (
          <span className="productRating productRatingGreen">
            <i class="far fa-star productIcon"></i>
            {product.ratings}
          </span>
        )}

        <div className="cardFooter block">
          <button
            class="button button-secondary"
            onClick={() => dispatch({ type: "ADD_TO_BAG", payload: product })}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
