const { Schema } = require("mongoose");

const addressSchema = new Schema({
  province: { type: String, required: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
  postalCode: { type: String, required: true },
  coordinates: { type: [Number, Number], default: [29.633708, 52.530075] },
});
module.exports = { addressSchema };
