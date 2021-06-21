import axios from "axios";
import { wishlist } from "../API/URL";
import { isUserLoggedIn } from "../utils/utils";

export const addItemInWishlist = async (
  product,
  dispatch,
  isLoggedIn,
  token
) => {
  isUserLoggedIn({
    isLoggedIn,
    callback: async () => {
      try {
        const { _id } = product;
        const postData = await axios.post(
          wishlist,
          {
            _id: _id,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );
        if (postData.status === 201) {
          dispatch({ type: "ADD_WISHLIST_ITEM", payload: product });
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
};

export const removeItemFromWishlist = async (
  product,
  dispatch,
  isLoggedIn,
  token
) => {
  isUserLoggedIn({
    isLoggedIn,
    callback: async () => {
      try {
        const { _id } = product;
        const deletedId = await axios.delete(`${wishlist}/${_id}`, {
          headers: { authorization: token },
        });
        dispatch({ type: "DELETE_WISHLIST_ITEM", payload: product });
      } catch (error) {
        console.log(error);
      }
    },
  });
};
