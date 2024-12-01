const { Router } = require("express");
const { AuthRouter } = require("./module/auth/auth.routes");
const { UserRouter } = require("./module/user/user.routes");
const { Authorization } = require("./common/guard/authorization.guard");
const { AccommodationRouter } = require("./module/accommodation/accommodation.routes");
const router = Router();
router.use("/auth", AuthRouter);
router.use("/user", Authorization,UserRouter);
router.use("/accommodation", Authorization,AccommodationRouter);
module.exports = {
  MainRouter: router,
};
