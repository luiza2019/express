const { validateAccessToken } = require("./../utils/tokens");
const ErrorHandler = require("./../utils/error-handler");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return next(ErrorHandler.UnautorizedError());
    }

    const userData = validateAccessToken(token);

    if (!userData) {
      return next(ErrorHandler.UnautorizedError());
    }
    req.user = userData;
    next();
  } catch (e) {
    next(ErrorHandler.UnautorizedError());
  }
};

module.exports = auth;
