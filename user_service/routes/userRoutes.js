const exporess = require("express");

const authController = require("../controllers/authController");

const router = exporess.Router();

router
  .route("/signup")
  .post(authController.signUp);
router
  .route("/login")
  .post(authController.login);

module.exports = router;
