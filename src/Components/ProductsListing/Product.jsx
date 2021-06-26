import { useNavigate } from "react-router-dom";
import starIcon from "../../assets/images/star.svg";
import { AddToWishlist } from "../Wishlist/AddToWishlist";

export const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className={product.inStock ? "card" : "card overlayCard"}
      key={product._id}
    >
      <h4 className={product.inStock ? "normalText" : "overlayText"}>
        Out Of Stock
      </h4>
      <div onClick={() => navigate(`/products/${product._id}`, { product })}>
        <div className="cardTop">
          <img src={product.image} alt={product.name} className="cardImage" />
        </div>
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
          <AddToWishlist key={product._id} product={product} />
        </div>

        <span className="productRating">
          {product.ratings} / 5.0
          <img src={starIcon} alt="ratings" className="cardIcon-sm"></img>
        </span>

        <h3 className="productPrice">Rs {product.discountedPrice}</h3>
        <h4 className="actualPrice">Rs {product.originalPrice}</h4>
        <h4 className="offer">{product.discount} % </h4>
      </div>
    </div>
  );
};
