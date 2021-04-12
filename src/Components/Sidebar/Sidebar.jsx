import React from "react";
import { Clear } from "./Clear";
import { Brand } from "./Brand";
import { Categories } from "./Categories";
import { Availability } from "./Availability";

import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Clear />
      <Brand />
      <Categories />
      <Availability />
    </aside>
  );
};
