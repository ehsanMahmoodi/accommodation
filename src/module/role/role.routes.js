const { Router } = require("express");
const roleController = require("./role.controller");
const router = Router();
router.get('/get-all',roleController.getAll)
router.post('/create',roleController.create)
router.delete('/remove/:name',roleController.removeByName)
module.exports = {
  RoleRouter: router,
};