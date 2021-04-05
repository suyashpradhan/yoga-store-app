export const initialState = {
  products: [],
  isLoading: true,
  itemsInWishlist: [],
  itemsInBag: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_PRODUCTS":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };

    case "ADD_TO_BAG":
      return {
        ...state,
        itemsInBag: [
          ...state.itemsInBag,
          { ...action.payload, productQuantity: 1, isInCart: true },
        ],
      };

    default:
      return state;
  }
};
