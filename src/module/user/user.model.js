const { Schema, model } = require("mongoose");
const otpSchema = new Schema({
  code: { type: Number, default: 0 },
  expiresIn: { type: Number, default: undefined },
});
const userSchema = new Schema(
  {
    firstName: { type: String,default:'' },
    lastName: { type: String,default:'' },
    email: { type: String ,default:''},
    phone: { type: String },
    nationalId: { type: String, unique: true },
    isVerified: { type: Boolean, default: false },
    wallet: { type: Number, default: 0 },
    role: {
      type: String,
      enum: ["SUPER_ADMIN", "ADMIN", "USER", "PROVIDER"],
      default: "USER",
    },
    otp: {
      type: otpSchema,
      default: {
        code: 0,
        expiresIn: undefined,
      },
    },
  },
  {
    timestamps: true,
  }
);
const UserModel = model("user", userSchema);
module.exports = { UserModel };
