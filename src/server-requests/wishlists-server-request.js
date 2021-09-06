import axios from "axios";
import { wishlist } from "../API/URL";

export const fetchUserWishlist = async (dispatch) => {
  try {
    let tempWishlist = JSON.parse(localStorage?.getItem("tempWishlist")) || [];
    let res = await axios.get(`${wishlist}`);
    if (tempWishlist.length > 0) {
      tempWishlist = tempWishlist.filter((item) => {
        if (!res.data.wishlistItems.includes(item)) {
          axios.post(`${wishlist}`, {
            _id: item._id,
          });
        }
        return !res.data.wishlistItems.includes(item);
      });
      localStorage?.setItem("tempWishlist", JSON.stringify([]));
    }

    if (res.data.wishlistItems) {
      dispatch({
        type: "SET_WISHLIST",
        payload: [...res.data.wishlistItems, ...tempWishlist],
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const actionOnUserWishlist = async (product, dispatch, isLoggedIn) => {
  try {
    dispatch({ type: "LOADER_INIT" });
    if (isLoggedIn) {
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
    } else {
      dispatch({
        type: "TOGGLE_TEMP_WISHLIST",
        payload: product,
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: "LOADER_FAILED" });
  }
};
