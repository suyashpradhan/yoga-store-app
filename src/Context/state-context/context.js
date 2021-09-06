import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducers";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    itemsInWishlist: JSON.parse(localStorage?.getItem("wishlist")) || [],
    itemsInTempWishlist:
      JSON.parse(localStorage?.getItem("tempWishlist")) || [],
    itemsInBag: [],
    sortBy: "",
    searchedText: "",
    toastMessage: "",
    isLoading: false,
    filters: {
      includeOutOfStock: false,
      isYogaAssured: false,
      filterByBrands: [],
      filterByRatings: [],
      filterByDiscounts: [],
    },
  });

  useEffect(() => {
    localStorage?.setItem("wishlist", JSON.stringify(state.itemsInWishlist));
  }, [state.itemsInWishlist]);

  useEffect(() => {
    localStorage?.setItem(
      "tempWishlist",
      JSON.stringify(state.itemsInTempWishlist)
    );
  }, [state.itemsInTempWishlist]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
