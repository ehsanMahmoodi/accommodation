const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const { RoleModel } = require("./role.model");
const { RoleMessages } = require("./role.messages");
const permissionsService = require("../permissions/permissions.service");
const { isValidObjectId } = require("mongoose");
const { PermissionMessages } = require("../permissions/permissions.messages");

class RoleService {
  #model;
  #permissionService;
  constructor() {
    autoBind(this);
    this.#model = RoleModel;
    this.#permissionService = permissionsService;
  }
  async getAll() {
    return await this.#model.aggregate([
      {
        $lookup: {
          from: "permissions",
          localField: "permissions",
          foreignField: "_id",
          as: "permissions",
        },
      },
      {
        $project: {
          "permissions._id": 0,
        },
      },
    ]);
  }
  async create(roleDTO) {
    roleDTO.name = roleDTO.name.toUpperCase();
    await this.checkExistRole(roleDTO.name);
    if (typeof roleDTO.permissions == "string")
      roleDTO.permissions = roleDTO.permissions.split(",");
    await this.checkExistPermissionId(roleDTO.permissions);
    const newRole = await this.#model.create(roleDTO);
    if (!newRole)
      throw new createHttpError.InternalServerError(RoleMessages.CreatedError);
    return true;
  }
  async checkExistPermissionId(list) {
    const promises = list.map(async (item) => {
      if (!isValidObjectId(item)) {
        throw new createHttpError.BadRequest(PermissionMessages.InvalidId);
      }
      try {
        await this.#permissionService.findById(item);
      } catch (error) {
        if (error instanceof createHttpError.NotFound) {
          throw new createHttpError.BadRequest(
            `${PermissionMessages.NotFound}: ${item}`
          );
        } else {
          throw error;
        }
      }
    });
    await Promise.all(promises);
    return null;
  }
  async checkExistRole(name) {
    const role = await this.#model.findOne({ name });
    if (role) throw new createHttpError.Conflict(RoleMessages.Conflict);
    return true;
  }
  async removeByName(name) {
    const role = await this.#model.findOneAndDelete({ name });
    if (!role) throw new createHttpError.NotFound(RoleMessages.NotFound);
    return true;
  }
}
module.exports = new RoleService();
