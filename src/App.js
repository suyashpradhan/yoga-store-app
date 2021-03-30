import React, { useEffect, useReducer } from "react";
import axios from "axios";
import "./index.css";

const initialState = {
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_DATA":
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

function App() {
  const [{ data }, dispatch] = useReducer(reducer, initialState);
  console.log(data);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        dispatch({ type: "SHOW_DATA", payload: products });
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <div className="App">
      <h1>Products</h1>
      <br />
      {data.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Rs {product.originalPrice}</p>
            {product.images.map((image) => {
              return (
                <img
                  src={image}
                  style={{
                    border: "1px solid red",
                    width: "10rem",
                    display: "inline-block",
                  }}
                  alt={product.name}
                ></img>
              );
            })}

            <br />
            <br />

            <h2>Specifications</h2>
            <h2>Products Details: </h2>
            {product.specifications.general.map((iterator) => {
              return (
                <div key={product.key}>
                  <h3>Model name {iterator.modelName}</h3>
                  <h3>Suitable for {iterator.suitableFor}</h3>
                </div>
              );
            })}
            <br />
            <h2>Products Details: </h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
