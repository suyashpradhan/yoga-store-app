import React from "react";
import { Clear } from "./Clear";
import { Categories } from "./Categories";
import { Availability } from "./Availability";

import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Clear />

      <Categories />
      <Availability />
    </aside>
  );
};
