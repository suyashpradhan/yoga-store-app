export const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "SHOW_SINGLE_PRODUCT":
      return {
        ...state,
        isLoading: false,
        singleProduct: action.payload,
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

    case "ADD_WISHLIST_ITEM":
      return {
        ...state,
        itemsInWishlist: state.itemsInWishlist.concat(action.payload),
      };

    case "SET_WISHLIST":
      return {
        ...state,
        itemsInWishlist: action.payload,
      };

    case "DELETE_WISHLIST_ITEM":
      return {
        ...state,
        itemsInWishlist: state.itemsInWishlist.filter(
          (product) => product.id !== action.payload._id
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
