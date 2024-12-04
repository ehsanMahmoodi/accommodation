const { Schema, Types, model } = require("mongoose");
const reservationSchema = new Schema(
  {
    accommodation: {
      type: Types.ObjectId,
      ref: "accommodation",
      required: true,
    },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    guest: { type: Types.ObjectId, ref: "user", required: true },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },
    totalPrice: {
      type: Number,
      default:0
    },
  },
  {
    timestamps: true,
  }
);
const ReservationModel = model("reservation", reservationSchema);
module.exports = { ReservationModel };
