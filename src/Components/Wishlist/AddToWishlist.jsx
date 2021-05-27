import { useStateContext } from "../../Context";
import wishlist from "../../assets/images/wishlist.svg";
import wishlistFilled from "../../assets/images/wishlist-filled.svg";
import { isAlreadyAdded } from "../../utils";
import {
  addItemInWishlist,
  removeItemFromWishlist,
} from "../../server-requests/index";

export const AddToWishlist = ({ product }) => {
  const {
    state: { itemsInWishlist },
    dispatch,
  } = useStateContext();

  return (
    <>
      {isAlreadyAdded(itemsInWishlist, product._id) ? (
        <button
          className="iconWrap"
          onClick={() => removeItemFromWishlist(product, dispatch)}
        >
          <img src={wishlistFilled} alt="" className="cardIcon" />
        </button>
      ) : (
        <button
          className="iconWrap"
          onClick={() => addItemInWishlist(product, dispatch)}
        >
          <img src={wishlist} alt="" className="cardIcon" />
        </button>
      )}
    </>
  );
};
