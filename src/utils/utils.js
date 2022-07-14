export const isAlreadyAdded = (itemsArray, id) => itemsArray.some((item) => item._id === id);

export const searchedProduct = (product, searchedValue) =>
  product.filter((tobeSearched) =>
    tobeSearched.name.toLowerCase().includes(searchedValue.toLowerCase())
  );
