const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Product must have title."]
  },
  details: {
    type: String,
    required: [true, "Product must have details"]
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
