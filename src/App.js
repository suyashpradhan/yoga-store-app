import React from "react";
import axios from "axios";
import { Navbar } from "./Components/Navbar.jsx";
import { Banner } from "./Components/Banner.jsx";
import { Categories } from "./Components/Categories/Categories.jsx";
import "./assets/styles/main.css";

export const App = () => {
  const demo = async () => {
    const response = await axios.get("/api/products");
    console.log(response.data);
  };

  return (
    <>
      <Navbar />
      <Banner />
      <Categories />

      <button onClick={() => demo()}>Button</button>
    </>
  );
};
