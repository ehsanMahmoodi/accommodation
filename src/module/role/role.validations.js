const Joi = require("joi");

const createRoleValidation = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "فیلد name باید رشته باشد.",
    "any.required": " فیلد name الزامیست.",
  }),
  permissions: Joi.alternatives()
  .try(
      Joi.array().items(Joi.string()),
      Joi.string()
  )
  .required()
  .messages({
      "array.base": "فیلد permissions باید آرایه باشد.",
      "string.base": "فیلد permissions باید رشته باشد.",
      "any.required": "فیلد permissions الزامیست.",
      "alternatives.match": "فیلد permissions باید یا رشته یا آرایه‌ای از رشته‌ها باشد."
  })
  // permissions: Joi.array().items(Joi.string()).required().messages({
  //   "array.base": "فیلد permissions باید آرایه باشد.",
  //   "any.required": " فیلد permissions الزامیست.",
  // }),
});
module.exports = {createRoleValidation};