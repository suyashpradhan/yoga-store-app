import React from "react";
import { useStateContext } from "../../Context";

export const Clear = () => {
  const { dispatch } = useStateContext();
  return (
    <div className="sidebarSection flex j-space-between a-items-center">
      <h2 className="sidebarTitle">Filters</h2>
      <button
        className="link link-secondary"
        onClick={() => dispatch({ type: "CLEAR_FILTER" })}
      >
        Clear filters
      </button>
    </div>
  );
};
