const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const path = require("path");
const slugify = require("slugify");
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
function getListOfImagesFromRequest(req) {
  if (req?.fileUploadPath && req?.fileName && req?.files?.length > 0) {
    return req.files.map((file) =>
      path.join(req.fileUploadPath, file.filename).replace(/\\/g, "/")
    );
  }
  return [];
}
const generateSlug = (text) => {
  return slugify(text, {
    replacement: "-",
    lower: true,
    trim: true,
  });
};
module.exports = { verifyJwtToken, getListOfImagesFromRequest, generateSlug };
