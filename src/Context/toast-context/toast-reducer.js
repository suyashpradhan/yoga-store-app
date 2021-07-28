export const ACTIONS = {
  SHOW_TOAST: "SHOW_TOAST",
};

export const toastReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_TOAST:
      return { ...state, toastMessage: action.payload };
    default:
      return state;
  }
};
