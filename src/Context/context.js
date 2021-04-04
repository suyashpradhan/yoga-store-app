import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducers";
const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    isLoading: true,
    itemsInWishlist: [],
    itemsInBag: [],
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useStateContext = () => useContext(CartContext);
