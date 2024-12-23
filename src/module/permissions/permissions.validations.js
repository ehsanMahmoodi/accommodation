const Joi = require("joi");

const createPermissionValidation = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "فیلد name باید رشته باشد.",
    "any.required": " فیلد name الزامیست.",
  }),
});
module.exports = { createPermissionValidation };
