import React, { useEffect } from "react";
import { useStateContext } from "../../Context";
import CloseButton from "../../assets/images/close.svg";
import Star from "../../assets/images/star.svg";
import axios from "axios";

export const WishlistCard = () => {
  const {
    state: { itemsInWishlist },
    dispatch,
  } = useStateContext();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://apiyogastore.suyashpradhan.repl.co/wishlist"
        );
        if (response.status === 200) {
          dispatch({
            type: "SET_WISHLIST",
            payload: response.data,
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <h1 className="wishlistTitle">
        My Wishlist <span>({itemsInWishlist.length} items)</span>
      </h1>
      <div className="wishlistItem">
        {itemsInWishlist.map((product) => {
          return (
            <>
              <div className="card">
                <div class="cardTop">
                  <img
                    src={product.image}
                    alt={product.name}
                    class="cardImage"
                  ></img>
                </div>
                <div class="cardBody">
                  <h1 class="productName">{product.name}</h1>
                  <h2 class="productCategory">{product.category}</h2>
                  <span class="productRating">
                    3 / 5.0
                    <img src={Star} alt="ratings" class="cardIcon-sm" />
                  </span>

                  <div class="cardFooter flex j-space-between a-items-center">
                    <button type="button" class="button button-secondary">
                      MOVE TO BAG
                    </button>
                  </div>
                </div>
                <button className="closeButton">
                  <img src={CloseButton} className="icons" alt="close"></img>
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
