const express = require("express");
const app = express();
const dbConnection = require("./database/database");
const productRoute = require("./routes/products.router");
const cors = require("cors");
dbConnection();
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.use("/products", productRoute);

app.listen(8000, () => {
  console.log(`Server started on port 8000`);
});
