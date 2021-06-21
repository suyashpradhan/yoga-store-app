export const getSortedData = (state, data) => {
  if (state.sortBy === "high_to_low") {
    return [...data].sort((a, b) => b.discountedPrice - a.discountedPrice);
  }
  if (state.sortBy === "low_to_high") {
    return [...data].sort((a, b) => a.discountedPrice - b.discountedPrice);
  }
  return data;
};

export const getFilteredData = (state, data) => {
  if (!state.filters.includeOutOfStock) {
    return [...data].filter((product) => product.inStock);
  }

  if (state.filters.filterByBrands.length !== 0) {
    return [...data].filter((product) => {
      return state.filters.filterByBrands.includes(product.brand);
    });
  }

  if (state.filters.filterByCategories.length !== 0)
    [...data].filter((product) =>
      state.filters.filterByCategories.includes(product.category)
    );

  if (state.filters.filterByDiscounts.length !== 0)
    [...data].filter((product) =>
      state.filters.filterByDiscounts.includes(product.discount)
    );

  if (state.filters.filterByRatings.length !== 0)
    [...data].filter((product) =>
      state.filters.filterByRatings.includes(product.ratings)
    );

  return [...data];
};
