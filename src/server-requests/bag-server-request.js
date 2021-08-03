import axios from "axios";
import { bagURL } from "./../API/URL";

export const fetchUserBag = async (dispatch) => {
  const {
    data: { products },
    status,
  } = await axios.get(`${bagURL}`);
  console.log(products);

  if (status === 200 || status === 201) {
    dispatch({ type: "SET_BAG", payload: products });
  }
};

export const actionOnBag = async (product, dispatch) => {
  try {
    const {
      data: { products },
      status,
    } = await axios.post(`${bagURL}`, {
      _id: product._id,
      quantity: 1,
      isActive: true,
    });
    console.log(products);
    if (status === 200 || status === 201) {
      dispatch({
        type: "SET_BAG",
        payload: products,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const removeProduct = async (product, dispatch) => {
  try {
    const { data } = await axios.delete(`${bagURL}`, {
      _id: product._id,
    });
    if (data.success) {
      dispatch({
        type: "REMOVE_PRODUCT",
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
