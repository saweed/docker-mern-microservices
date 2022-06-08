const exporess = require("express");

const authController = require("../controllers/authController");

const router = exporess.Router();

router
  .route("/signup")
  .post(authController.signUp);
router.post("/login", authController.login);

module.exports = router;
