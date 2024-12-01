const omitEmpty = require("omit-empty");
const EmptyFieldsHandler = (option) => {
  return function (req, res, next) {
    req.body = omitEmpty(req.body, option);
    req.params = omitEmpty(req.params, option);
    req.query = omitEmpty(req.query, option);
    next();
  };
};
module.exports = { EmptyFieldsHandler };
