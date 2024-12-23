const { Router } = require("express");
const permissionsController = require("./permissions.controller");
const router = Router();
router.post('/create',permissionsController.create)
router.get('/get-all',permissionsController.getAll)
router.delete('/remove/:id',permissionsController.remove)
module.exports = {
  PermissionRouter: router,
};