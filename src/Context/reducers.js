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

    default:
      return state;
  }
};
