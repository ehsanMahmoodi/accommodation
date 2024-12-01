const autoBind = require("auto-bind");
const httpCodes = require("http-codes");
const accommodationService = require("./accommodation.service");
const { AccommodationMessages } = require("./accommodation.messages");
const { getListOfImagesFromRequest } = require("../../common/utils/functions");
const {
  createAccommodationValidation,
} = require("./accommodation.validations");
class AccommodationController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = accommodationService;
  }
  async create(req, res, next) {
    try {
      const { body } = req;
      const host = req?.user?.userId;
      let images = getListOfImagesFromRequest(req);
      if (body.address && typeof body.address == "string")
        body.address = JSON.parse(body.address);
      await createAccommodationValidation.validateAsync({
        ...body,
        host,
        images,
      });
      await this.#service.create({ ...body, host, images });
      res.status(httpCodes.CREATED).send({
        statusCode: res.statusCode,
        data: {
          message: AccommodationMessages.Created,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new AccommodationController();
