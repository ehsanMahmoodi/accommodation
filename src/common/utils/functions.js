const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const verifyJwtToken = (token, secretKey) => {
  let data;
  const verifyToken = jwt.verify(token, secretKey, function (err, decode) {
    if (err) {
      if (/.*expire.*/i.exec(err?.name)) {
        throw new createHttpError.BadRequest("توکن منقضی شده است.");
      } else {
        throw new createHttpError.BadRequest("توکن اشتباه است.");
      }
    }
    data = decode;
  });
  if (!data)
    throw new createHttpError.Unauthorized("لطفا وارد حساب کاربری خود شوید.");
  return data;
};
module.exports = { verifyJwtToken };
