const Product = require("../models/productModel");


exports.getAllProducts = async (req, res, next) => {
  try{
    const products = await Product.find();
    res.status(200).json({
      status: 'success',
      results: products.length,
      data: {
        products
      }
    })
  } catch (e) {
    res.status(400).json({
      status: "fail",
      error: e.message,
    });
  }

}

exports.getOneProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      error: e.message,
    });
  }
}

exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      error: e.message
    });
  }
}

exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      error: e.message,
    });
  }
}

exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      error: e.message,
    });
  }
};
