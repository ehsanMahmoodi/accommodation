const Joi = require("joi");

const sendOtpValidation = Joi.object({
  firstName: Joi.string().trim().min(3).max(16).messages({
    "string.min": "نام حداقل 3 کاراکتر باید باشد.",
    "string.max": "نام حداکثر 16 کاراکتر باید باشد.",
  }),
  lastName: Joi.string().trim().min(3).max(16).messages({
    "string.min": "نام خانوادگی حداقل 3 کاراکتر باید باشد.",
    "string.max": "نام خانوادگی حداکثر 16 کاراکتر باید باشد.",
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
