const { Router } = require("express");
const userController = require("./user.controller");
const router = Router();
router.get("/find-user/:userId", userController.getUserById);
router.post("/find-user/nationalId", userController.getUserByNationalId);
router.get("/profile/:userId", userController.getProfile);
module.exports = {
  UserRouter: router,
};
