const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const { ReservationModel } = require("./reservation.model");
const { AccommodationModel } = require("../accommodation/accommodation.model");
const { UserModel } = require("../user/user.model");
const { differenceInDays, isAfter, isBefore, isEqual } = require("date-fns");
const {
  AccommodationMessages,
} = require("../accommodation/accommodation.messages");
const { UserMessages } = require("../user/user.messages");
const { ReservationMessages } = require("./reservation.messages");
const { isValidObjectId } = require("mongoose");
class ReservationService {
  #model;
  #accommodationModel;
  #userModel;
  constructor() {
    autoBind(this);
    this.#model = ReservationModel;
    this.#accommodationModel = AccommodationModel;
    this.#userModel = UserModel;
  }
  async create(reservationDTO) {
    const accommodation = await this.checkExistAccommodation(
      reservationDTO.accommodation_id
    );
    await this.checkExistUser(reservationDTO.guest);
    const dayNumber = this.validateDate(
      reservationDTO.startDate,
      reservationDTO.endDate
    );
    console.log(dayNumber);
    const totalPrice = dayNumber * accommodation?.price;
    reservationDTO.totalPrice = totalPrice;
    const newReservertion = await this.#model.create(reservationDTO);
    if (!newReservertion)
      throw new createHttpError.InternalServerError(
        ReservationMessages.CreatedError
      );
    return true;
  }
  async checkExistAccommodation(id) {
    const accommodation = await this.#accommodationModel.findById(id);
    if (!accommodation)
      throw new createHttpError.NotFound(AccommodationMessages.NotFound);
    return accommodation;
  }
  async checkExistUser(id) {
    const user = await this.#userModel.findById(id);
    if (!user) throw new createHttpError.NotFound(UserMessages.NotFound);
    return true;
  }
  validateDate(start, end) {
    if (isAfter(new Date(start), new Date(end)))
      throw new createHttpError.BadRequest(
        "تاریخ شروع بعد از تاریخ پایان نمی تواند باشد"
      );
    if (isBefore(new Date(end), new Date(start)))
      throw new createHttpError.BadRequest(
        "تاریخ پایان بعد از تاریخ شروع نمی تواند باشد"
      );
    if (isEqual(new Date(start), new Date(end)))
      throw new createHttpError.BadRequest(
        "تاریخ شروع و پایان نمی تواند برابر باشد"
      );
    return differenceInDays(new Date(end), new Date(start));
  }
  async getAll() {
    return await this.#model.find();
  }
  async remove(id) {
    if (!isValidObjectId(id))
      throw new createHttpError.BadRequest(ReservationMessages.InvalidObjectId);
    const reservation = await this.#model.findByIdAndDelete({ _id: id });
    if (!reservation)
      throw new createHttpError.InternalServerError(
        ReservationMessages.DeletedError
      );
    return true;
  }
}
module.exports = new ReservationService();
