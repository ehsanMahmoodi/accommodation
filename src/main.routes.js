const { Router } = require("express");
const { AuthRouter } = require("./module/auth/auth.routes");
const { Authorization } = require("./common/guard/authorization.guard");
const router = Router();
router.use("/auth",Authorization, AuthRouter);
module.exports = {
  MainRouter: router,
};
