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
    case "INCREMENT_QTY":
      return {
        ...state,
        itemsInBag: state.itemsInBag.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                productQuantity: product.productQuantity + 1,
              }
            : product
        ),
      };

    case "DECREMENT_QTY":
      return {
        ...state,
        itemsInBag: state.itemsInBag.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                productQuantity:
                  product.productQuantity !== 1
                    ? product.productQuantity - 1
                    : 1,
              }
            : product
        ),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        itemsInBag: state.itemsInBag.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        itemsInWishlist: [
          ...state.itemsInWishlist,
          { ...action.payload, isInWishlist: true },
        ],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        itemsInWishlist: state.itemsInWishlist.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    case "HIGH_TO_LOW":
      return {
        ...state,
        sortBy: action.payload,
      };

    case "LOW_TO_HIGH":
      return {
        ...state,
        sortBy: action.payload,
      };

    case "INCLUDE_OUT_OF_STOCK":
      return {
        ...state,
        inStock: !state.inStock,
      };

    case "FILTER_BY_CATEGORY":
      return {
        ...state,
      };

    case "CLEAR_FILTER":
      return {
        ...state,
        inStock: false,
        sortBy: null,
      };

    default:
      return state;
  }
};
