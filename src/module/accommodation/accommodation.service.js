const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const { AccommodationModel } = require("./accommodation.model");
const { AccommodationMessages } = require("./accommodation.messages");
class AccommodationService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = AccommodationModel;
  }
  async create(accommodationDTO) {
    const newAccommodationDTO = await this.#model.create(accommodationDTO);
    if (!newAccommodationDTO)
      throw new createHttpError.InternalServerError(
        AccommodationMessages.CreatedError
      );
    return true;
  }
}
module.exports = new AccommodationService();
