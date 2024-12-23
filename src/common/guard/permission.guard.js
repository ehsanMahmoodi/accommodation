const createHttpError = require("http-errors");
const { AuthorizationMessages } = require("./messages");
const { UserModel } = require("../../module/user/user.model");
const { RoleModel } = require("../../module/role/role.model");
const {
  PermissionModel,
} = require("../../module/permissions/permissions.model");
["accommodation.new", "accommodation.remove"];
const CheckPermission = (list = []) => {
  return async function (req, res, next) {
    try {
      const userId = req?.user?.userId;
      if (!userId)
        throw new createHttpError.Unauthorized(
          AuthorizationMessages.Unauthorized
        );
      const user = await UserModel.findById(userId);
      if (!user)
        throw new createHttpError.NotFound(AuthorizationMessages.NotFound);
      const userRole = await RoleModel.findOne({ name: user?.role });

      const permissions = await PermissionModel.find({
        _id: { $in: userRole.permissions },
      });
      const userPermissions = permissions.map((item) => item.name);
      const hashPermission = list.every((item) =>
        userPermissions.includes(item)
      );
      if (
        list.lenght == 0 ||
        hashPermission ||
        userPermissions.includes(["all"])
      )
        return next();
      throw new createHttpError.Forbidden(AuthorizationMessages.Forbidden);
    } catch (error) {
      next(error);
    }
  };
};
module.exports = { CheckPermission };
