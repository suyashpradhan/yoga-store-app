export const isAlreadyAdded = (itemsArray, _id) => {
  if (itemsArray) {
    return itemsArray.find((item) => item._id === _id);
  }
  return false;
};

export const isUserLoggedIn = ({ callback, isLoggedIn }) => {
  if (isLoggedIn) {
    callback();
  } else {
    alert("User not logged In!");
  }
};
