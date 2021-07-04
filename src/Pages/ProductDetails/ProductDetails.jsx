import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import starIcon from "../../assets/images/star.svg";
import "./ProductDetails.css";
import { Link } from "react-router-dom";
import { Product } from "../../Components/ProductsListing/Product";
import { AiFillHome } from "react-icons/ai";
import { AddToWishlist } from "../../Components/Wishlist/AddToWishlist";
import { AddToBag } from "../../Components/Bag/AddToBag";
import { products } from "../../API/URL";

export const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { _id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${products}/${_id}`);
      setProduct(response.data);
    })();
  }, []);

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
              alt={product.name}
              className="productDetailsImage"
            />
          </div>
        </div>
        <div className="xl-5 lg-5 md-12 sm-12">
          <div className="productRightWrapper">
            <h1 className="productDetailsTitle">{product.name}</h1>
            <h1 className="productDetailsBrandName">{product.brand}</h1>
            <span className="productRating">
              {product.ratings} / 5.0
              <img src={starIcon} alt="ratings" className="cardIcon-sm"></img>
            </span>

            <h3 className="productPrice pB2">Rs {product.discountedPrice}</h3>
            <h4 className="actualPrice">Rs {product.originalPrice}</h4>
            <h4 className="offer">{product.discount} % </h4>

            <div className="cardFooter block">
              <AddToBag key={product._id} product={product} />
              <AddToWishlist key={product._id} product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
