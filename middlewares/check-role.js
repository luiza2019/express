const ErrorHandler = require("../utils/error-handler");

const checkRole =
  (...roles) =>
  (req, res, next) => {
    if (req.method === "OPTIONS") {
      next();
    }
    const { user } = req;
    try {
      if (!roles.includes(user.role))
        throw ErrorHandler.ForbiddenError("Permission denied");
      next();
    } catch (e) {
      next(ErrorHandler.ForbiddenError("Permission denied"));
    }
  };

module.exports = checkRole;
