const { Router } = require("express");
const optionController = require("./option.controller");
const router = Router();
router.post("/new", optionController.create);
router.get("/", optionController.getAll);
module.exports = {
  OptionRouter: router,
};
