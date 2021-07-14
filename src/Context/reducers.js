export const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "SET_BAG":
      return {
        ...state,
        itemsInBag: action.payload,
      };

    case "ADD_PRODUCT":
      if (
        state.itemsInBag.some((product) => product._id === action.payload._id)
      ) {
        return {
          ...state,
          itemsInBag: state.itemsInBag.map((product) =>
            product._id === action.payload._id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      } else {
        return {
          ...state,
          itemsInBag: state.itemsInBag.concat({
            ...action.payload,
            quantity: 1,
          }),
        };
      }

    case "INCREMENT_QTY":
      return {
        ...state,
        itemsInBag: state.itemsInBag.map((product) =>
          product._id === action.payload._id
            ? {
                ...product,
                quantity: product.quantity + 1,
              }
            : product
        ),
      };

    case "DECREMENT_QTY":
      return {
        ...state,
        itemsInBag: state.itemsInBag.map((product) =>
          product._id === action.payload._id
            ? {
                ...product,
                quantity:
                  product.quantity !== 1
                    ? product.quantity - 1
                    : state.state.itemsInBag.filter(
                        (product) => product._id !== action.payload._id
                      ),
              }
            : product
        ),
      };

    case "REMOVE_PRODUCT":
      return {
        ...state,
        itemsInBag: state.itemsInBag.filter(
          (product) => product._id !== action.payload._id
        ),
      };

    case "CLEAR_BAG":
      return { ...state, itemsInBag: [] };

    case "MOVE_TO_WISHLIST":
      return {
        ...state,
        itemsInWishlist: state.itemsInWishlist.concat(action.payload),
        itemsInBag: state.itemsInBag.filter(
          (cartItem) => cartItem._id !== action.payload._id
        ),
      };

    case "SET_WISHLIST":
      return {
        ...state,
        itemsInWishlist: action.payload,
      };

    case "ADD_PRODUCT_IN_WISHLIST":
      return {
        ...state,
        itemsInWishlist: state.itemsInWishlist.concat({
          ...action.payload,
        }),
      };

    case "REMOVE_PRODUCT_FROM_WISHLIST":
      return {
        ...state,
        itemsInWishlist: state.itemsInWishlist.filter(
          (product) => product._id !== action.payload._id
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
        filters: { ...state.filters, includeOutOfStock: action.payload },
      };

    case "FILTER_BY_CATEGORIES":
      return state.filters.filterByCategories.includes(action.payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              filterByCategories: state.filters.filterByCategories.filter(
                (category) => category !== action.payload
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              filterByCategories: state.filters.filterByCategories.concat(
                action.payload
              ),
            },
          };

    case "FILTER_BY_BRANDS":
      return state.filters.filterByBrands.includes(action.payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              filterByBrands: state.filters.filterByBrands.filter(
                (brand) => brand !== action.payload
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              filterByBrands: state.filters.filterByBrands.concat(
                action.payload
              ),
            },
          };

    case "FILTER_BY_DISCOUNTS":
      return state.filters.filterByDiscounts.includes(action.payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              filterByDiscounts: state.filters.filterByDiscounts.filter(
                (discount) => discount !== action.payload
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              filterByDiscounts: state.filters.filterByDiscounts.concat(
                action.payload
              ),
            },
          };
    case "FILTER_BY_RATINGS":
      return state.filters.filterByRatings.includes(action.payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              filterByRatings: state.filters.filterByRatings.filter(
                (rating) => rating !== action.payload
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              filterByRatings: state.filters.filterByRatings.concat(
                action.payload
              ),
            },
          };

    case "CLEAR_FILTER":
      return {
        ...state,
        sortBy: null,
        filters: {
          includeOutOfStock: false,
          isYogaAssured: false,
          filterByCategories: [],
          filterByBrands: [],
          filterByDiscounts: [],
          filterByRatings: [],
        },
      };

    default:
      return state;
  }
};
