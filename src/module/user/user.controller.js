const autoBind = require("auto-bind");
const httpCodes = require("http-codes");
const userService = require("./user.service");
class UserController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = userService;
  }
  async getUserById(req, res, next) {
    try {
      const {
        params: { userId },
      } = req;
      const user = await this.#service.getUserById(userId);
      res.status(httpCodes.OK).send({
        statusCode: res.statusCode,
        data: {
          user,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async getUserByNationalId(req, res, next) {
    try {
      const {
        body: { nationalId },
      } = req;
      const user = await this.#service.getUserByNationalId(nationalId);
      res.status(httpCodes.OK).send({
        statusCode: res.statusCode,
        data: {
          user,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async getProfile(req, res, next) {
    try {
      const {
        params: { userId },
      } = req;
      const user = await this.#service.getProfile(userId);
      res.status(httpCodes.OK).send({
        statusCode: res.statusCode,
        data: {
          user,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new UserController();
