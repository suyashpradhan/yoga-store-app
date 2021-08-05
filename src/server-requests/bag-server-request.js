import axios from "axios";
import { bagURL } from "./../API/URL";

export const fetchUserBag = async (dispatch) => {
  const {
    data: { products },
    status,
  } = await axios.get(`${bagURL}`);

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

export const increaseQuantity = async (product, dispatch, quantity) => {
  console.log(product);
  try {
    const {
      data: { products },
      status,
    } = await axios.post(`${bagURL}`, {
      _id: product._id,
      quantity: quantity + 1,
      isActive: true,
    });
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

export const decreaseQuantity = async (product, dispatch, quantity) => {
  console.log(product);
  try {
    const {
      data: { products },
      status,
    } = await axios.post(`${bagURL}`, {
      _id: product._id,
      quantity: quantity - 1,
      isActive: true,
    });
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

export const removeFromBag = async (product, dispatch) => {
  console.log(product);
  try {
    const {
      data: { products },
      status,
    } = await axios.post(`${bagURL}`, {
      _id: product._id,
      quantity: 0,
      isActive: false,
    });
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
