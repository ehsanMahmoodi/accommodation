const { Router } = require("express");
const accommodationController = require("./accommodation.controller");
const { uploadFile } = require("../../config/multer.config");
const router = Router();
router.post(
  "/new",
  uploadFile("accommodations", "image").array("images", 10),
  accommodationController.create
);
router.delete("/remove/:id", accommodationController.remove);
module.exports = {
  AccommodationRouter: router,
};
