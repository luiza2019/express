const ErrorHandler = require("./../utils/error-handler");

const ProblemService = require("./../services/problem-service");
const { Problem } = require("../models");
const { CREATE_SUCCESS, DELETE_SUCCESS } = require("../utils/consts");

const create = async (req, res, next) => {
  try {
    const { title, description, tag } = req.body;
    const { id } = req.user;
    if (req.files) {
      images = req.files.images;
      await ProblemService.create(title, description, id, tag, images);
    }
    await ProblemService.create(title, description, id, tag);

    res.json({ message: CREATE_SUCCESS, id });
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

const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    await ProblemService.deleteOne(id);
    res.json({ message: DELETE_SUCCESS });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
  getAll,
  deleteOne,
};
