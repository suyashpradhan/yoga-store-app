import { useStateContext, useAuth } from "../../context";
import wishlist from "../../assets/images/wishlist.svg";
import wishlistFilled from "../../assets/images/wishlist-filled.svg";
import { isAlreadyAdded } from "../../utils";
import { actionOnUserWishlist } from "../../server-requests/index";

export const AddToWishlist = ({ product }) => {
  const {
    userAuthState: { isLoggedIn },
  } = useAuth();
  const {
    state: { itemsInWishlist, isLoading },
    dispatch,
  } = useStateContext();

  const isAlreadyInWishlist = isAlreadyAdded(itemsInWishlist, product._id);

  return (
    <>
      <button
        className="iconWrap"
        type="button"
        onClick={() => {
          isLoggedIn
            ? actionOnUserWishlist(product, dispatch, isLoading)
            : dispatch({
                type: "TOGGLE_TOAST",
                payload: "You need to login to add product in Wishlist ",
              });
        }}
      >
        {isAlreadyInWishlist ? (
          <img src={wishlistFilled} alt="" className="cardIcon" />
        ) : (
          <img src={wishlist} alt="" className="cardIcon" />
        )}
      </button>
    </>
  );
};
