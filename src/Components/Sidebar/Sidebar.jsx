import React from "react";
import { Clear } from "./Clear";
import { Brand } from "./Brand";
import { Categories } from "./Categories";
import { Availability } from "./Availability";
import { Discount } from "./Discount";
import { Ratings } from "./Ratings";

import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Clear />
      <Brand />
      <Categories />
      <Availability />
      <Discount />
      <Ratings />
    </aside>
  );
};
