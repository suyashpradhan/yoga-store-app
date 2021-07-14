/* eslint-disable default-case */
import axios from "axios";
import { bagURL, wishlist } from "./../API/URL";

export const fetchUserBag = async (dispatch) => {
  const {
    data: { bag },
  } = await axios.get(`${bagURL}`);
  if (bag) {
    dispatch({ type: "SET_BAG", payload: bag });
  }
};

export const actionOnBag = async (product, action, dispatch) => {
  try {
    const { data } = await axios.post(`${bagURL}`, {
      _id: product._id,
      action: action,
    });
    if (data.success) {
      switch (action.toUpperCase()) {
        case "ADD_PRODUCT_IN_BAG":
          dispatch({
            type: "ADD_PRODUCT",
            payload: product,
          });
          break;
        case "REMOVE_PRODUCT_FROM_BAG":
          dispatch({
            type: "REMOVE_PRODUCT",
            payload: product,
          });
          break;
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export const emptyBag = async (dispatch) => {
  try {
    const { data } = await axios.delete(`${bagURL}`);
    if (data.success) {
      dispatch({ type: "CLEAR_BAG" });
    }
  } catch (error) {
    console.error(error);
  }
};
