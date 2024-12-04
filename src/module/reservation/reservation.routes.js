const { Router } = require("express");
const reservationController = require("./reservation.controller");
const router = Router();
router.post('/new',reservationController.create)
router.get('/',reservationController.getAll)
router.delete('/:id',reservationController.remove)
module.exports = {
  ReservationRouter: router,
};