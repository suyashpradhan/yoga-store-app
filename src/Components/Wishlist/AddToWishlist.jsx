import { useStateContext } from "../../context";
import wishlist from "../../assets/images/wishlist.svg";
import wishlistFilled from "../../assets/images/wishlist-filled.svg";
import { isAlreadyAdded } from "../../utils";
import { actionOnUserWishlist } from "../../server-requests/index";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";

export const AddToWishlist = ({ product }) => {
  const {
    userAuthState: { isLoggedIn },
  } = useAuth();
  const {
    state: { itemsInWishlist },
    dispatch,
  } = useStateContext();
  const navigate = useNavigate();

  const isAlreadyInWishlist = isAlreadyAdded(itemsInWishlist, product._id);

  return (
    <>
      <button
        className="iconWrap"
        type="button"
        onClick={() => {
          isLoggedIn
            ? actionOnUserWishlist(product, dispatch)
            : dispatch({
                type: "SHOW_TOAST",
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
