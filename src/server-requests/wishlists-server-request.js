import axios from "axios";
import { wishlists } from "../API/URL";
import { carts } from "../API/URL";

export const addItemInWishlist = async (product, dispatch) => {
  try {
    const { _id } = product;
    const postData = await axios.post("http://localhost:4000/wishlist", {
      _id: _id,
    });
    if (postData.status === 201) {
      dispatch({ type: "ADD_WISHLIST_ITEM", payload: product });
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeItemFromWishlist = async (product, dispatch) => {
  try {
    const { _id } = product;
    const deletedId = await axios.delete(`${wishlists}/${_id}`);

    if (deletedId.status === 204) {
      dispatch({ type: "DELETE_WISHLIST_ITEM", payload: product });
    }
  } catch (error) {
    console.log(error);
  }
};

export const addItemInBag = async (product, dispatch) => {
  try {
    const { _id } = product;
    const postData = await axios.post(carts, {
      _id: _id,
      quantity: 1,
    });
    if (postData.status === 201) {
      dispatch({ type: "ADD_TO_BAG", payload: product });
    }
    console.log("after post", product);
  } catch (error) {
    console.log(error);
  }
};
