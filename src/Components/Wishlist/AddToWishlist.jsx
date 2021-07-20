import { useStateContext } from "../../Context";
import wishlist from "../../assets/images/wishlist.svg";
import wishlistFilled from "../../assets/images/wishlist-filled.svg";
import { isAlreadyAdded } from "../../utils";
import { actionOnUserWishlist } from "../../server-requests/index";
import { useToastHook } from "../../CustomHooks/useToast";
import { useAuth } from "../../Context/auth-context";
import { useNavigate } from "react-router-dom";

export const AddToWishlist = ({ product }) => {
  const toast = useToastHook(3000);
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
            ? actionOnUserWishlist(product, dispatch, isAlreadyInWishlist)
            : navigate("/login");
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
