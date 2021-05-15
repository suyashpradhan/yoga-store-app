import { Link } from "react-router-dom";
import wishlist from "../../assets/images/wishlist.svg";
import wishlistFilled from "../../assets/images/wishlist-filled.svg";
import starIcon from "../../assets/images/star.svg";
import { useStateContext } from "../../Context";
import axios from "axios";
import { useToastHook } from "../../CustomHooks/useToast";

export const Product = ({ product }) => {
  const toast = useToastHook(4000);
  const {
    state: { itemsInWishlist },
    dispatch,
  } = useStateContext();

  const ifItemsInWishlistExists = (product) => {
    return itemsInWishlist.find((item) => item.id === product._id);
  };

  const wishlistPostData = async (product) => {
    try {
      const { _id } = product;
      const postData = await axios.post(
        "https://apiyogastore.suyashpradhan.repl.co/wishlist",
        { id: _id }
      );
      console.log(postData);
      if (postData.status === 201) {
        dispatch({ type: "ADD_WISHLIST_ITEM", payload: postData });
        toast("error", "Added to the wishlist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const wishlistDeleteData = async (product) => {
    try {
      const { _id } = product;
      const deletedId = await axios.delete(
        `https://apiyogastore.suyashpradhan.repl.co/wishlist/${_id}`
      );
      if (deletedId.status === 204) {
        dispatch({ type: "DELETE_WISHLIST_ITEM", payload: deletedId });
        toast("error", "Removed Item from Wishlist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={product.inStock ? "card" : "card overlayCard"}
      key={product._id}
    >
      <h4 className={product.inStock ? "normalText" : "overlayText"}>
        Out Of Stock
      </h4>
      <Link to={`/products/${product._id}`}>
        <div className="cardTop">
          <img src={product.image} alt={product.name} className="cardImage" />
        </div>
      </Link>
      <div className="cardBody">
        <div className="cardTitleRow">
          <div>
            <h1 className="productName">
              <span style={{ marginRight: "0.2rem" }}>{product.brand}</span>
              {product.name}
            </h1>
            <h2 className="productCategory">{product.category}</h2>
          </div>
          {ifItemsInWishlistExists(product) ? (
            <button
              className="iconWrap"
              onClick={() => wishlistDeleteData(product)}
            >
              <img src={wishlistFilled} alt="" className="cardIcon" />
            </button>
          ) : (
            <button
              className="iconWrap"
              onClick={() => wishlistPostData(product)}
            >
              <img src={wishlist} alt="" className="cardIcon" />
            </button>
          )}
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

/**
 * 
 * 
 * {/* <div className="cardFooter block">
          {itemExist(product) ? (
            <Link to="/bag">
              <button className="button button-primary flex-1">
                GO TO BAG
              </button>
            </Link>
          ) : (
            <button
              type="button"
              className="button button-secondary flex-1"
              onClick={() => dispatch({ type: "ADD_TO_BAG", payload: product })}
            >
              ADD TO BAG
            </button>
          )}
        </div> 
        {product.inStock && (
          <div className="outOfStock">
            <h1 className="outOfStockText">
              Out of
              <br />
              stock
            </h1>
          </div>
        )}
 */
