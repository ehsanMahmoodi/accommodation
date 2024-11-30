const Joi = require("joi");

const sendOtpValidation = Joi.object({
  nationalId: Joi.string()
    .trim()
    .pattern(/^[0-9]{10}$/)
    .messages({
      "string.pattern.base": "کد ملی را به درستی وارد کنید.",
    }),
  phone: Joi.string().trim().length(11).messages({
    "string.length": "لطفا شماره موبایل را بدرستی وارد کنید.",
  }),
});
const checkOtpValidation = Joi.object({
  phone: Joi.string().trim().length(11).messages({
    "string.length": "لطفا شماره موبایل را بدرستی وارد کنید.",
  }),
});
module.exports = { sendOtpValidation, checkOtpValidation };
