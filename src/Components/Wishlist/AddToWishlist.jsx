import axios from "axios";
import { useStateContext } from "../../Context";
import wishlist from "../../assets/images/wishlist.svg";
import { useToastHook } from "../../CustomHooks/useToast";
import wishlistFilled from "../../assets/images/wishlist-filled.svg";
import { isAlreadyAdded } from "../../utils";
import { wishlists } from "../../api/urls";

export const AddToWishlist = ({ product }) => {
  const {
    state: { itemsInWishlist },
    dispatch,
  } = useStateContext();
  const toast = useToastHook(4000);

  const wishlistPostData = async (product) => {
    try {
      const { _id } = product;
      const postData = await axios.post(wishlists, {
        _id: _id,
        isInWishlist: true,
      });
      if (postData.status === 201) {
        dispatch({ type: "ADD_WISHLIST_ITEM", payload: product });
        toast("error", "Added to the wishlist");
      }
      console.log("after post", product);
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
        dispatch({ type: "DELETE_WISHLIST_ITEM", payload: product });
        toast("error", "Removed Item from Wishlist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isAlreadyAdded(itemsInWishlist, product._id) ? (
        <button
          className="iconWrap"
          onClick={() => wishlistDeleteData(product)}
        >
          <img src={wishlistFilled} alt="" className="cardIcon" />
        </button>
      ) : (
        <button className="iconWrap" onClick={() => wishlistPostData(product)}>
          <img src={wishlist} alt="" className="cardIcon" />
        </button>
      )}
    </>
  );
};
