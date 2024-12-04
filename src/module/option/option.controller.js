const autoBind = require("auto-bind");
const httpCodes = require("http-codes");
const optionService = require("./option.service");
const { OptionMessages } = require("./option.messages");
const { createOptionValidation } = require("./option.validations");
class OptionController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = optionService;
  }
  async create(req, res, next) {
    try {
      const { body } = req;
      await createOptionValidation.validateAsync(body);
      await this.#service.create(body);
      res.status(httpCodes.CREATED).send({
        statusCode: res.statusCode,
        data: {
          message: OptionMessages.Created,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async getAll(req, res, next) {
    try {
      const options = await this.#service.getAll();
      res.status(httpCodes.CREATED).send({
        statusCode: res.statusCode,
        data: {
          options,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new OptionController();
