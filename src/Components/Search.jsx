import React from "react";

export const Search = () => {
  return (
    <>
      <form className="searchForm">
        <input
          type="text"
          placeholder="Search for items, brand etc..."
          className="formField"
        ></input>
      </form>
    </>
  );
};
