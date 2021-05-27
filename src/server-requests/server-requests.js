import axios from "axios";
import { wishlists } from "../API/URL";
import { carts } from "../API/URL";

export const addItemInWishlist = async (product, dispatch) => {
  try {
    const { _id } = product;
    const postData = await axios.post(`${wishlists}`, {
      _id: _id,
      isInWishlist: true,
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

export const removeItemFromBag = async (product, dispatch) => {
  console.log(product);
  try {
    const { _id } = product;
    const response = await axios.delete(`${carts}/${_id}`);

    if (response.status === 204) {
      dispatch({ type: "REMOVE_ITEM_FROM_BAG", payload: product });
    }
  } catch (error) {
    console.log(error);
  }
};

export const incrementQuantity = async (product, dispatch) => {
  console.log(product);
  try {
    const { _id } = product;
    const response = await axios.post(`${carts}/${_id}`, {
      _id: _id,
      quantity: product.quantity + 1,
    });

    if (response.status === 204) {
      dispatch({ type: "INCREMENT_QUANTITY", payload: product });
    }
  } catch (error) {
    console.log(error);
  }
};
