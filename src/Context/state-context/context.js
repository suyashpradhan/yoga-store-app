import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducers";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    itemsInWishlist: [],
    itemsInBag: [],
    sortBy: "",
    searchedText: "",
    toastMessage: "",
    filters: {
      includeOutOfStock: false,
      isYogaAssured: false,
      filterByCategories: [],
      filterByBrands: [],
      filterByRatings: [],
      filterByDiscounts: [],
    },
  });

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
