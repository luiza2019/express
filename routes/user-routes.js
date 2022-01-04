const router = require("express").Router();

const auth = require("../middlewares/auth-middleware");
const checkRole = require("../middlewares/check-role");
const UserController = require("./../controllers/user-controller");
const { body } = require("express-validator");

router.post(
  "/signup",
  body("email").isEmail(),
  body("password")
    .isLength({ min: 3, max: 30 })
    .withMessage("must be at least 3 chars long"),
  UserController.signup
);
router.post("/login", UserController.login);
router.get("/", auth, checkRole("ADMIN"), UserController.getAll);
router.post("/refresh", UserController.refresh);
router.get("/activate/:link", UserController.activate);

module.exports = router;
