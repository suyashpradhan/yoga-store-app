import axios from "axios";
import { bagURL } from "./../API/URL";

export const fetchUserBag = async (dispatch) => {
  const {
    data: { bag },
  } = await axios.get(`${bagURL}`);
  if (bag) {
    dispatch({ type: "SET_BAG", payload: bag });
  }
};

export const actionOnBag = async (product, dispatch) => {
  try {
    const { data } = await axios.post(`${bagURL}`, {
      _id: product._id,
    });
    if (data.success) {
      dispatch({
        type: "ADD_PRODUCT",
        payload: product,
      });
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
