const ErrorHandler = require("./../utils/error-handler");

const ProblemService = require("./../services/problem-service");
const { Problem } = require("../models");
const { CREATE_SUCCESS } = require("../utils/consts");

const create = async (req, res, next) => {
  try {
    const { title, description, tag } = req.body;
    const { id } = req.user;
    const { images } = req.files;

    await ProblemService.create(title, description, id, tag, images);
    res.json({ message: CREATE_SUCCESS });
  } catch (e) {
    next(e);
  }
};

const getAll = async (req, res, next) => {
  try {
    let { q, page, limit, tag } = req.query;
    // console.log(req.query);
    page = page || 1;
    limit = limit || 6;

    const offset = page * limit - limit;
    const problems = await ProblemService.getAll({ offset, limit, q, tag });
    res.json(problems);
  } catch (e) {
    // console.log(e);
    res.status(404).json({ message: "Tag not found" });
    // next(e);
  }
};

module.exports = {
  create,
  getAll,
};
