import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useStateContext } from "../../Context";
import starIcon from "../../assets/images/star.svg";
import "./ProductDetails.css";
import { Link } from "react-router-dom";
import { Product } from "../../Components/ProductsListing/Product";
import { AiFillHome } from "react-icons/ai";

export const ProductDetails = () => {
  const {
    state: { singleProduct, itemsInBag },
    dispatch,
  } = useStateContext();

  const { _id } = useParams();

  const itemExist = (product) => {
    return itemsInBag.find((item) => item._id === product._id);
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://apiyogastore.suyashpradhan.repl.co/products/${_id}`
      );
      dispatch({ type: "SHOW_SINGLE_PRODUCT", payload: response.data });
    })();
  }, []);
  return (
    <div>
      <div className="wrapper-fluid">
        <Link to="/products" element={<Product />}>
          <AiFillHome className="productDetailsIcon" />
        </Link>

        <div className="row mT2">
          <div className="xl-7 lg-7 md-12 sm-12 ">
            <div className="productLeftWrapper">
              <img
                src={singleProduct.image}
                alt={singleProduct.image}
                className="productDetailsImage"
              />
            </div>
          </div>
          <div className="xl-5 lg-5 md-12 sm-12">
            <div className="productRightWrapper">
              <h1 className="productDetailsTitle">{singleProduct.name}</h1>
              <h1 className="productDetailsBrandName">{singleProduct.brand}</h1>
              <p className="productDetailsDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                distinctio sit, sunt cupiditate omnis, sequi quia, consectetur
                numquam rerum voluptas veniam sed aspernatur quis voluptatum
                beatae mollitia quo eveniet architecto.
              </p>
              <span className="productRating">
                {singleProduct.ratings} / 5.0
                <img src={starIcon} alt="ratings" className="cardIcon-sm"></img>
              </span>

              <h3 className="productPrice pB2">
                Rs {singleProduct.discountedPrice}
              </h3>
              <h4 className="actualPrice">Rs {singleProduct.originalPrice}</h4>
              <h4 className="offer">{singleProduct.discount} % </h4>

              <div className="cardFooter block">
                {itemExist(singleProduct) ? (
                  <Link to="/bag">
                    <button className="button button-primary  flex-1 mR1">
                      GO TO BAG
                    </button>
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="button button-secondary flex-1 mR1"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_BAG", payload: singleProduct })
                    }
                  >
                    ADD TO BAG
                  </button>
                )}
                <button className="button button-default ">
                  Add to wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
