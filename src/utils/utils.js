export const isAlreadyAdded = (itemsArray, id) => {
  if (itemsArray) {
    return itemsArray.find((item) => item._id === id);
  }
  return false;
};
