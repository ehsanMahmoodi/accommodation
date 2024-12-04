const Joi = require("joi");
const createReservationValidation = Joi.object({
  accommodation: Joi.string().required().messages({
    "any.required": "accommodation الزامیست.",
  }),
  startDate: Joi.string().required().messages({
    "any.required": "startDate الزامیست.",
  }),
  endDate: Joi.string().required().messages({
    "any.required": "endDate الزامیست.",
  }),
}).unknown(true);
module.exports = { createReservationValidation };
