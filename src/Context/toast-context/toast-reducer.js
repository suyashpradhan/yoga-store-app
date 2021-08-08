export const ACTIONS = {
  TOGGLE_TOAST: "TOGGLE_TOAST",
};

export const toastReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_TOAST:
      return { ...state, toastMessage: action.payload };
    default:
      return state;
  }
};
