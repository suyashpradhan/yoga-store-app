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

export const actionOnUserWishlist = async (product, dispatch) => {
  try {
    const { data } = await axios.post(`${wishlist}`, {
      _id: product._id,
    });
    if (data.success) {
      dispatch({
        type: "TOGGLE_WISHLIST",
        payload: product,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
