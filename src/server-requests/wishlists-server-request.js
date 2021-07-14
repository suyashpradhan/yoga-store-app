import axios from "axios";
import { wishlist } from "../API/URL";

export const fetchUserWishlist = async (dispatch) => {
  try {
    const {
      data: { wishlistItems },
    } = await axios.get(`${wishlist}`);
    if (wishlistItems) {
      dispatch({ type: "SET_WISHLIST", payload: wishlistItems });
    }
  } catch (err) {
    console.error(err);
  }
};

export const actionOnUserWishlist = async (
  product,
  dispatch,
  isAlreadyInWishlist
) => {
  try {
    const { data } = await axios.post(`${wishlist}`, {
      _id: product._id,
    });
    console.log(data);
    if (data.success) {
      if (isAlreadyInWishlist) {
        dispatch({
          type: "REMOVE_PRODUCT_FROM_WISHLIST",
          payload: product,
        });
      } else {
        dispatch({
          type: "ADD_PRODUCT_IN_WISHLIST",
          payload: product,
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
};
