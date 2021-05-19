import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useStateContext } from "../../Context";
import starIcon from "../../assets/images/star.svg";
import "./ProductDetails.css";
import { Link } from "react-router-dom";
import { Product } from "../../Components/ProductsListing/Product";
import { AiFillHome } from "react-icons/ai";
import { cart } from "../../api/urls";
import { useToastHook } from "../../CustomHooks/useToast";

export const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { _id } = useParams();
  const {
    state: { itemsInBag },
    dispatch,
  } = useStateContext();
  const toast = useToastHook(4000);

  console.log(product);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://apiyogastore.suyashpradhan.repl.co/products/${_id}`
      );
      setProduct(response.data);
    })();
  }, []);

  const addToBag = async (product) => {
    console.log(product);
    try {
      const { _id } = product;
      const postData = await axios.post(cart, {
        _id: _id,
        quantity: 1,
        isInCart: true,
      });
      if (postData.status === 201) {
        dispatch({ type: "ADD_TO_BAG", payload: product });
        toast("error", "Item added to the bag");
      }
      console.log("after post", product);
    } catch (error) {
      console.log(error);
    }
  };

  /* const itemExist = (product) => {
    return itemsInBag.find((item) => item._id === product._id);
  };*/

  return (
    <div className="wrapper-fluid">
      <Link to="/products" element={<Product />}>
        <AiFillHome className="productDetailsIcon" />
      </Link>

      <div className="row mT2">
        <div className="xl-7 lg-7 md-12 sm-12 ">
          <div className="productLeftWrapper">
            <img
              src={product.image}
              alt={product.image}
              className="productDetailsImage"
            />
          </div>
        </div>
        <div className="xl-5 lg-5 md-12 sm-12">
          <div className="productRightWrapper">
            <h1 className="productDetailsTitle">{product.name}</h1>
            <h1 className="productDetailsBrandName">{product.brand}</h1>
            <p className="productDetailsDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              distinctio sit, sunt cupiditate omnis, sequi quia, consectetur
              numquam rerum voluptas veniam sed aspernatur quis voluptatum
              beatae mollitia quo eveniet architecto.
            </p>
            <span className="productRating">
              {product.ratings} / 5.0
              <img src={starIcon} alt="ratings" className="cardIcon-sm"></img>
            </span>

            <h3 className="productPrice pB2">Rs {product.discountedPrice}</h3>
            <h4 className="actualPrice">Rs {product.originalPrice}</h4>
            <h4 className="offer">{product.discount} % </h4>

            <div className="cardFooter block">
              {/* {itemExist(product) ? (
                <Link to="/bag">
                  <button className="button button-primary  flex-1 mR1">
                    GO TO BAG
                  </button>
                </Link>
              ) : (
                <button
                  type="button"
                  className="button button-secondary flex-1 mR1"
                >
                  ADD TO BAG
                </button>
              )} */}
              <button
                type="button"
                className="button button-secondary flex-1 mR1"
                onClick={() => addToBag(product)}
              >
                ADD TO BAG
              </button>
              <button className="button button-default ">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
