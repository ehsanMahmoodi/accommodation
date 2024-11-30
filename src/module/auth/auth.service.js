const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const { UserModel } = require("../user/user.model");
const { randomInt } = require("crypto");
const { AuthMessages } = require("./auth.messages");
const jwt = require("jsonwebtoken");
class AuthService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = UserModel;
  }
  async sendOTP(otpDTO) {
    const now = Date.now();
    const otp = {
      code: randomInt(10000, 99999),
      expiresIn: now + 1000 * 60 * 2,
    };
    const user = await this.#model.findOne({ phone: otpDTO?.phone });
    if (!user) {
      otpDTO.otp = otp;
      await this.#model.create(otpDTO);
    }
    if (user?.otp && user?.otp?.expiresIn > now)
      throw new createHttpError.BadRequest(AuthMessages.OTP_NOT_EXPIRED);
    await this.#model.updateOne(
      { phone: otpDTO.phone },
      {
        $set: {
          otp,
        },
      }
    );
    return otp;
  }
  async checkOTP(otpDTO) {
    const user = await this.findUserByPhone(otpDTO.phone);
    const now = Date.now();
    if (user?.otp) {
      if (user?.otp && user?.otp?.expiresIn < now)
        throw new createHttpError.BadRequest(AuthMessages.OTP_EXPIRED);
      if (user?.otp && user?.otp?.code == otpDTO.code) {
        const token = this.signAccessToken({ userId: user._id });
        return token;
      }
      if (user?.otp && user?.otp?.code !== otpDTO.code)
        throw new createHttpError.BadRequest(AuthMessages.OTP_NOT_MATCH);
    }
    throw new createHttpError.InternalServerError(
      AuthMessages.INTERNAL_SERVER_ERROR
    );
  }
  async findUserByPhone(phone) {
    const user = await this.#model.findOne({ phone });
    if (!user) throw new createHttpError.NotFound(AuthMessages.NotFound);
    return user;
  }
  signAccessToken(payload) {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET_KEY);
  }
}
module.exports = new AuthService();
