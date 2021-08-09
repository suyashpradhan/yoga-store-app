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
    dispatch({ type: "LOADER_INIT" });
    const { data } = await axios.post(`${wishlist}`, {
      _id: product._id,
    });
    if (data.success) {
      dispatch({
        type: "TOGGLE_WISHLIST",
        payload: product,
      });
      dispatch({ type: "LOADER_SUCCESS" });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: "LOADER_FAILED" });
  }
};
