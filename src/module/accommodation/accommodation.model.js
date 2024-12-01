const { Schema, model, Types } = require("mongoose");
const { addressSchema } = require("./address.schema");

const accommodationSchema = new Schema(
  {
    host: { type: Types.ObjectId, ref: "user", required: true },
    title: { type: String, required: true },
    description: { type: String, default: "" },
    images: { type: [String], default: [] },
    price: { type: Number, default: 0 },
    address: {
      type: addressSchema,
      default: {
        province: "فارس",
        city: "شیراز",
        street: "ارم",
        postalCode: "711111111",
        coordinates: [29.633708, 52.530075],
      },
    },
  },
  {
    timestamps: true,
  }
);
const AccommodationModel = model("accommodation", accommodationSchema);
module.exports = { AccommodationModel };
