const exporess = require('express');

const prodController = require("../controllers/productControlller");
const authorizeUser = require('../middlerwares/authMiddleware');

const router = exporess.Router();

router
  .route("/")
  .get(prodController.getAllProducts)
  .post(authorizeUser, prodController.createProduct);

router
  .route("/:id")
  .get(prodController.getOneProduct)
  .patch(authorizeUser, prodController.updateProduct)
  .delete(authorizeUser, prodController.deleteProduct);

module.exports = router;
