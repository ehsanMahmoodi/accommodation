const autoBind = require("auto-bind");
const httpCodes = require("http-codes");
const permissionsService = require("./permissions.service");
const { PermissionMessages } = require("./permissions.messages");
const { createPermissionValidation } = require("./permissions.validations");
class PermissionController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = permissionsService;
  }
  async getAll(req, res, next) {
    try {
      const permissions = await this.#service.getAll();
      res.status(httpCodes.OK).send({
        statusCode: res.statusCode,
        data: {
          permissions,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      const {
        body: { name, description },
      } = req;
      await createPermissionValidation.validateAsync({name})
      await this.#service.create({ name, description });
      res.status(httpCodes.CREATED).send({
        statusCode: res.statusCode,
        data: {
          message: PermissionMessages.Created,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async remove(req, res, next) {
    try {
      const {
        params: { id },
      } = req;
      await this.#service.remove(id);
      res.status(httpCodes.OK).send({
        statusCode: res.statusCode,
        data: {
          message: PermissionMessages.Deleted,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new PermissionController();
