const Joi = require("joi");

const createOptionValidation = Joi.object({
  key: Joi.string().required().min(5).messages({
    "any.required": "key آپشن الزامی می باشد",
    "string.min": "key آپشن باید حداقل 5 کاراکتر باشد.",
  }),
  name: Joi.string().required().min(5).messages({
    "any.required": "عنوان آپشن الزامی می باشد",
    "string.min": "عنوان آپشن باید حداقل 5 کاراکتر باشد.",
  }),
  guid: Joi.string().min(5).messages({
    "string.min": "راهنمای آپشن باید حداقل 5 کاراکتر باشد.",
  }),
}).unknown(true);
module.exports = { createOptionValidation };
