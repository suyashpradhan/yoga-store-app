import React, { useEffect } from "react";
import { useStateContext } from "../Context/";

export const useAxios = () => {
  const { fetchData } = useStateContext();

  useEffect(() => {
    fetchData({
      url: "/api/products",
      dispatchType: "SHOW_PRODUCTS",
      list: "products",
    })();
  }, []);

  return fetchData;
};
