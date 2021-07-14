import { useStateContext } from "../../Context";
import wishlist from "../../assets/images/wishlist.svg";
import wishlistFilled from "../../assets/images/wishlist-filled.svg";
import { isAlreadyAdded } from "../../utils";
import { actionOnUserWishlist } from "../../server-requests/index";
import { useToastHook } from "../../CustomHooks/useToast";

export const AddToWishlist = ({ product }) => {
  const toast = useToastHook(3000);

  const {
    state: { itemsInWishlist },
    dispatch,
  } = useStateContext();

  const isAlreadyInWishlist = isAlreadyAdded(itemsInWishlist, product._id);

  return (
    <>
      <button
        className="iconWrap"
        type="button"
        onClick={() => {
          actionOnUserWishlist(product, dispatch, isAlreadyInWishlist);
          toast("success", `Product added to wishlist`);
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
