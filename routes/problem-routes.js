const auth = require("../middlewares/auth-middleware");
const { Problem } = require("../models");

const ProblemController = require("./../controllers/problem-controller");
const router = require("express").Router();

router.post("/create", auth, ProblemController.create);
router.get("/", ProblemController.getAll);

module.exports = router;
