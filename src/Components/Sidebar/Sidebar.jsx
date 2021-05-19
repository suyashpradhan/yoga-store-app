import React from "react";
import { Clear } from "./Clear";
import { Brands } from "./Brands";
import { Categories } from "./Categories";
import { Availability } from "./Availability";
import { Discounts } from "./Discounts";
import { Ratings } from "./Ratings";

import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Clear />
      <Brands />
      <Categories />
      <Availability />
      <Discounts />
      <Ratings />
    </aside>
  );
};
