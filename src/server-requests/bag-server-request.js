import axios from "axios";
import { bag } from "../API/URL";
import { isUserLoggedIn } from "../utils/utils";

export const addItemInBag = async (product, dispatch, isLoggedIn, token) => {
  isUserLoggedIn({
    isLoggedIn,
    callback: async () => {
      try {
        const { _id } = product;
        const postData = await axios.post(
          bag,
          {
            _id,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );
        if (postData.status === 201) {
          dispatch({ type: "ADD_TO_BAG", payload: product });
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
};

export const removeItemFromBag = async (
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
        const response = await axios.delete(`${bag}/${_id}`);

        if (response.status === 204) {
          dispatch({ type: "REMOVE_ITEM_FROM_BAG", payload: product });
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
};

export const incrementQuantity = async (product, dispatch) => {
  console.log(product);
  try {
    const { _id } = product;
    const response = await axios.post(`${bag}/${_id}`, {
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
