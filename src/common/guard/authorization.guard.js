const createHttpError = require("http-errors");
const { AuthorizationMessages } = require("./authorization.messages");
const { verifyJwtToken } = require("../utils/functions");
const { UserModel } = require("../../module/user/user.model");

const Authorization = (req, res, next) => {
  try {
    const { access_token } = req.cookies;
    if (!access_token)
      throw new createHttpError.Unauthorized(
        AuthorizationMessages.Unauthorized
      );
    const { userId } = verifyJwtToken(
      access_token,
      process.env.ACCESS_TOKEN_SECRET_KEY
    );
    const user = UserModel.findById(userId);
    if (!user)
      throw new createHttpError.NotFound(AuthorizationMessages.NotFound);
    req.user = { userId: user._id };
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = { Authorization };
