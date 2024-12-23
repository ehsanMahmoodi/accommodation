const { Router } = require("express");
const { AuthRouter } = require("./module/auth/auth.routes");
const { UserRouter } = require("./module/user/user.routes");
const { Authorization } = require("./common/guard/authorization.guard");
const {
  AccommodationRouter,
} = require("./module/accommodation/accommodation.routes");
const { OptionRouter } = require("./module/option/option.routes");
const { PermissionRouter } = require("./module/permissions/permissions.routes");
const { RoleRouter } = require("./module/role/role.routes");
const {
  ReservationRouter,
} = require("./module/reservation/reservation.routes");
const router = Router();
router.get("/", (req, res, next) => {
  try {
    res.status(200).send({
      statusCode: res.statusCode,
      data: {
        message:
          "To view the api's, enter the following address:http://localhost:3000/api/swagger",
      },
    });
  } catch (error) {
    next(error);
  }
});
router.use("/auth", AuthRouter);
router.use("/user", Authorization, UserRouter);
router.use("/accommodation", Authorization, AccommodationRouter);
router.use("/option", Authorization, OptionRouter);
router.use("/reservation", Authorization, ReservationRouter);
router.use("/permission", Authorization, PermissionRouter);
router.use("/role", Authorization, RoleRouter);
module.exports = {
  MainRouter: router,
};
