import React from "react";
import { Blankets } from "./Blankets";
import { YogaMats } from "./YogaMats";
import { Clothing } from "./Clothing";

export const Categories = () => {
  return (
    <>
      <section className="sectionCategories pT4 pB4">
        <div className="wrapper-fluid">
          <h2 className="sectionTitle">Shop by category</h2>
          <div className="innerSection">
            <YogaMats />
            <Blankets />
            <Clothing />
          </div>
        </div>
      </section>
    </>
  );
};
