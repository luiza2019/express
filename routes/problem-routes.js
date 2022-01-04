const auth = require("../middlewares/auth-middleware");
const checkPermission = require("../middlewares/check-permission");
const checkRole = require("../middlewares/check-role");
const { Problem } = require("../models");

const ProblemController = require("./../controllers/problem-controller");
const router = require("express").Router();

router.post("/create", auth, ProblemController.create);
router.delete(
  "/:id",
  auth,
  checkRole("ADMIN", "USER"),
  checkPermission(Problem),
  ProblemController.deleteOne
);
router.get("/", ProblemController.getAll);

module.exports = router;
