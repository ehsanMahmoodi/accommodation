const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const { AccommodationModel } = require("./accommodation.model");
const { AccommodationMessages } = require("./accommodation.messages");
const { isValidObjectId } = require("mongoose");
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
    if(!isValidObjectId(id))
      throw new createHttpError.BadRequest('id معتبر نیست.')
    const accommodation = await this.#model.findOneAndDelete({ _id: id });
    if (!accommodation)
      throw new createHttpError.NotFound(AccommodationMessages.NotFound);
    return true;
  }
  async getAll() {
    return await this.#model.find();
  }
}
module.exports = new AccommodationService();
