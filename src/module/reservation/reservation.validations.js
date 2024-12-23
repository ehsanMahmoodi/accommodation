const Joi = require("joi");
const createReservationValidation = Joi.object({
  accommodation_id: Joi.string()
    .required()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .messages({
      "any.required": "accommodation_id الزامیست.",
      'string.pattern.base':"accommodation_id معتبر نیست."
    }),
  startDate: Joi.string().required().messages({
    "any.required": "startDate الزامیست.",
  }),
  endDate: Joi.string().required().messages({
    "any.required": "endDate الزامیست.",
  }),
}).unknown(true);
module.exports = { createReservationValidation };
