export const isAlreadyAdded = (itemsArray, id) =>
  itemsArray.some((item) => item._id === id);

/* export const isUserLoggedIn = ({ callback, isLoggedIn }) => {
  if (isLoggedIn) {
    callback();
  } else {
    alert("User not logged In!");
  }
}; */
