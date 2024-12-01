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
  async remove(id) {
    const accommodation = await this.#model.findOneAndDelete({ _id: id });
    if (!accommodation)
      throw new createHttpError.NotFound(AccommodationMessages.NotFound);
    return true;
  }
}
module.exports = new AccommodationService();
