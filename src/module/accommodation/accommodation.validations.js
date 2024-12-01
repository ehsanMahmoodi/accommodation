const Joi = require("joi");

const createAccommodationValidation = Joi.object({
  host: Joi.any().required().messages({
    "any.required": " فیلد host الزامی می باشد.",
  }),
  title: Joi.string().required().min(5).messages({
    "any.required": " فیلد host الزامی می باشد.",
    "string.min": "عنوان اقامتگاه باید حداقل 5 کاراکتر داشته باشد.",
  }),
  description: Joi.string().required().min(5).messages({
    "any.required": " فیلد host الزامی می باشد.",
    "string.min": "توضیحات اقامتگاه باید حداقل 5 کاراکتر داشته باشد.",
  }),
  price: Joi.number().required().min(0).messages({
    "any.required": " فیلد host الزامی می باشد.",
    "string.min": "قیمت اقامتگاه باید نمی تواند کمتر از 0 باشد.",
  }),
  address: Joi.object({
    coordinates: Joi.array().items(Joi.number()).required().messages({
      "array.base": "مختصات جغرافیایی باید یک آرایه باشد",
      "array.items": "مختصات جغرافیایی باید شامل اعداد باشد",
      "any.required": "مختصات جغرافیایی الزامی است",
    }),
    postalCode: Joi.string().required().messages({
      "string.base": "کدپستی باید یک رشته باشد",
      "any.required": "کدپستی الزامی است",
    }),
    street: Joi.string().required().messages({
      "string.base": "خیابان باید یک رشته باشد",
      "any.required": "خیابان الزامی است",
    }),
    city: Joi.string().required().messages({
      "string.base": "شهر باید یک رشته باشد",
      "any.required": "شهر الزامی است",
    }),
    province: Joi.string().required().messages({
      "string.base": "استان باید یک رشته باشد",
      "any.required": "استان الزامی است",
    }),
  })
    .required()
    .messages({
      "object.base": "address باید به صورت آبجکت ارسال شود.",
      "any.required": "address الزامی است",
    }),
}).unknown(true);
module.exports = {createAccommodationValidation};