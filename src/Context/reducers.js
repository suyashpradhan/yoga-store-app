export const reducer = (state, action) => {
  switch (action.type) {
    case "ROUTE":
      return {
        ...state,
        route: action.payload,
      };
    case "SHOW_PRODUCTS":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case "FAILED_DATA":
      return {
        ...state,
        isLoading: true,
        products: [],
      };
    case "ADD_TO_WISHLIST":
      return {
        itemsInWishlist: action.payload,
      };

    default:
      return state;
  }
};
