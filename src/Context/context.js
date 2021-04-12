import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducers";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    isLoading: true,
    itemsInWishlist: [],
    itemsInBag: [],
    inStock: false,
    fastDelivery: false,
    sortBy: null,
    isNewest: true,
    isPopular: false,
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useStateContext = () => useContext(CartContext);
