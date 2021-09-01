import { isAlreadyAdded } from "../../utils";

export const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "LOADER_INIT":
      return {
        ...state,
        isLoading: true,
      };

    case "LOADER_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };

    case "LOADER_FAILED":
      return {
        ...state,
        isLoading: false,
      };

    case "SEARCH_PRODUCT":
      return {
        ...state,
        searchedText: action.payload,
      };

    case "CLEAR_SEARCH":
      return {
        ...state,
        searchedText: "",
      };

    case "SET_BAG":
      return {
        ...state,
        itemsInBag: action.payload,
      };

    case "TOGGLE_TOAST":
      return { ...state, toastMessage: action.payload };

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

    case "TOGGLE_WISHLIST":
      return {
        ...state,
        toastMessage: isAlreadyAdded(state.itemsInWishlist, action.payload._id)
          ? "Product Removed from Wishlist"
          : "Product Added in Wishlist",
        itemsInWishlist: isAlreadyAdded(
          state.itemsInWishlist,
          action.payload._id
        )
          ? state.itemsInWishlist.filter(
              (product) => product._id !== action.payload._id
            )
          : state.itemsInWishlist.concat(action.payload),
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
          filterByBrands: [],
          filterByDiscounts: [],
          filterByRatings: [],
        },
      };

    default:
      return state;
  }
};
