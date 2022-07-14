import React from 'react';

const discounts = [10, 20, 50, 70];

export const Discounts = () => {
  const { state, dispatch } = useStateContext();
  return (
    <div className="sidebarSection border-none">
      <h2 className="sidebarTitle">Discounts</h2>
      <div className="sidebarCollection">
        {discounts.map((discount) => {
          return (
            <div className="sidebarLists" key={discount}>
              <input
                type="checkbox"
                checked={state.filters.filterByDiscounts.includes(discount)}
                onChange={() => {
                  dispatch({ type: 'FILTER_BY_DISCOUNTS', payload: discount });
                }}></input>
              <label>{discount} % or more</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
