export const isAlreadyAdded = (itemsArray, id) =>
  itemsArray.some((item) => item._id === id);

export const searchedProduct = (product, searchedValue) => {
  return product.filter((tobeSearched) =>
    tobeSearched.name.toLowerCase().includes(searchedValue.toLowerCase())
  );
};

/* export const isUserLoggedIn = ({ callback, isLoggedIn }) => {
  if (isLoggedIn) {
    callback();
  } else {
    alert("User not logged In!");
  }
}; */
