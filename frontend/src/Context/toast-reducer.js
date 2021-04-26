export const toastReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_TOAST":
      return [...state, action.payload];

    case "CLOSE_TOAST":
      return state.filter((toast) => toast.id !== action.payload);

    default:
      break;
  }
};
