const express = require("express");
const router = express.Router();
router.use(express.json());
const Product = require("../models/products.models");

//Route for getting products and adding new products
router
  .route("/")
  .get(async (req, res) => {
    try {
      const allProducts = await Product.find({});
      res.send(allProducts);
    } catch (error) {
      res.status(400).json({ success: false, message: error });
    }
  })
  .post(async (req, res) => {
    const newProduct = new Product({
      productName: req.body.productName,
      productPrice: req.body.productPrice,
      productCategory: req.body.productCategory,
    });
    try {
      const productData = await newProduct.save();
      res.json(productData);
    } catch (error) {
      res.status(400).json({ success: false, message: error });
    }
  });

//Route for getting specific posts
router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const getSpecificProduct = await Product.findById(req.params.id);
      res.status(200).json({ success: true, getSpecificProduct });
    } catch (error) {
      res.status(400).json({ success: false, message: error });
    }
  })
  .delete(async (req, res) => {
    try {
      const deleteProduct = await Product.remove({ _id: req.params.id });
      res.send(deleteProduct);
    } catch (error) {
      res.status(400).json({ success: false, message: error });
    }
  })
  .post(async (req, res) => {
    try {
      const updateProduct = await Product.updateOne(
        { _id: req.params.id },
        {
          $set: {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
          },
        }
      );
      res.status(200).json({ success: true, updateProduct });
    } catch {
      res.status(400).json({ success: false, message: error });
    }
  });

module.exports = router;
