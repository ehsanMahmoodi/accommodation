const autoBind = require("auto-bind");
const httpCodes = require("http-codes");
const roleService = require("./role.service");
const { RoleMessages } = require("./role.messages");
const { createRoleValidation } = require("./role.validations");
class RoleController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = roleService;
  }
  async getAll(req, res, next) {
    try {
      const roles = await this.#service.getAll();
      res.status(httpCodes.OK).send({
        statusCode: res.statusCode,
        data: {
          roles,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      const {
        body: { name, permissions },
      } = req;
      await createRoleValidation.validateAsync({ name, permissions });
      await this.#service.create({ name, permissions });
      res.status(httpCodes.CREATED).send({
        statusCode: res.statusCode,
        data: {
          message: RoleMessages.Created,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async removeByName(req, res, next) {
    try {
      const {
        params: { name },
      } = req;
      await this.#service.removeByName(name);
      res.status(httpCodes.OK).send({
        statusCode: res.statusCode,
        data: {
          message: RoleMessages.Deleted,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new RoleController();
