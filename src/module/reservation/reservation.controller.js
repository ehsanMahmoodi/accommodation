const autoBind = require("auto-bind");
const httpCodes = require("http-codes");
const reservationService = require("./reservation.service");
const { ReservationMessages } = require("./reservation.messages");
const { createReservationValidation } = require("./reservation.validations");
class ReservationController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = reservationService;
  }
  async create(req, res, next) {
    try {
      const { body } = req;
      const guest = req?.user?.userId;
      await createReservationValidation.validateAsync(body)
      await this.#service.create({ ...body, guest });
      res.status(httpCodes.CREATED).send({
        statusCode:res.statusCode,
        data:{
          message: ReservationMessages.Created,
        }
      });
    } catch (error) {
      next(error);
    }
  }
  async getAll(req,res,next){
    try {
     const reservations= await this.#service.getAll()
     res.status(httpCodes.OK).send({
      statusCode:res.statusCode,
      data:{
        reservations
      }
     })
    } catch (error) {
      next(error)
    }
  }
  async remove(req,res,next){
    try {
      const {params:{id}}=req
      await this.#service.remove(id)
     res.status(httpCodes.OK).send({
      statusCode:res.statusCode,
      data:{
        message:ReservationMessages.Deleted
      }
     })
    } catch (error) {
      next(error)
    }
  }
}
module.exports = new ReservationController();
