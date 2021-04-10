import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducers";
import axios from "axios";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    isLoading: true,
    itemsInWishlist: [],
    itemsInBag: [],
    sortFilterStates: {
      inStock: false,
      fastDelivery: false,
      sortBy: null,
      isNewest: true,
      isPopular: false,
    },
  });

  async function fetchData({ url, dispatchType, list }) {
    try {
      const { data, status } = await axios.get(url);
      console.log(data, status);

      if (status === 200) {
        dispatch({ type: dispatchType, payload: data[list] });
      }
    } catch (error) {}
  }

  return (
    <CartContext.Provider value={{ state, dispatch, fetchData }}>
      {children}
    </CartContext.Provider>
  );
};

export const useStateContext = () => useContext(CartContext);
