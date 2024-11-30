const { Router } = require("express");
const { AuthRouter } = require("./module/auth/auth.routes");
const { UserRouter } = require("./module/user/user.routes");
const { Authorization } = require("./common/guard/authorization.guard");
const router = Router();
router.use("/auth", AuthRouter);
router.use("/user", Authorization,UserRouter);
module.exports = {
  MainRouter: router,
};
