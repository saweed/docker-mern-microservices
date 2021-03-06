const exporess = require('express');

const prodController = require("../controllers/productControlller");

const router = exporess.Router();

router
  .route("/")
  .get(prodController.getAllProducts)
  .post(prodController.createProduct);

router
  .route("/:id")
  .get(prodController.getOneProduct)
  .patch(prodController.updateProduct)
  .delete(prodController.deleteProduct);

module.exports = router;
