const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const { PermissionModel } = require("./permissions.model");
const { PermissionMessages } = require("./permissions.messages");
const { isValidObjectId } = require("mongoose");
class PermissionService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = PermissionModel;
  }
  async getAll() {
    return await this.#model.find();
  }
  async create(permissionDTO) {
    await this.checkExist(permissionDTO.name);
    const newPermission = await this.#model.create(permissionDTO);
    if (!newPermission)
      throw new createHttpError.InternalServerError(
        PermissionMessages.CreatedError
      );
    return true;
  }
  async checkExist(name) {
    const permission = await this.#model.findOne({ name });
    if (permission)
      throw createHttpError.Conflict(PermissionMessages.Conflict);
    return true;
  }
  async remove(id){
    if(!isValidObjectId(id))
          throw new createHttpError.BadRequest('id معتبر نیست.')
    const permission = await this.#model.findOneAndDelete({_id:id})
    if(!permission)
      throw new createHttpError.NotFound(PermissionMessages.NotFound)
    return true
  }
  async findById(id){
    if(!isValidObjectId(id))
          throw new createHttpError.BadRequest('id معتبر نیست.')
    const permission = await this.#model.findById(id)
    if(!permission)
      throw new createHttpError.NotFound(PermissionMessages.NotFound)
    return permission
  }
}
module.exports = new PermissionService();
