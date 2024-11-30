const autoBind = require("auto-bind");
const httpCodes = require("http-codes");
const authService = require("./auth.service");
const { AuthMessages } = require("./auth.messages");
const { sendOtpValidation, checkOtpValidation } = require("./auth.validations");
class AuthController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = authService;
  }
  async sendOTP(req, res, next) {
    try {
      const {
        body: { phone, nationalId },
      } = req;
      await sendOtpValidation.validateAsync({ phone, nationalId });
      const otp = await this.#service.sendOTP({ phone, nationalId });
      res.status(httpCodes.OK).send({
        statusCode: res.statusCode,
        data: {
          message: AuthMessages.OTP_SEND,
          otp,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async checkOTP(req, res, next) {
    try {
      const {
        body: { phone, code },
      } = req;
      await checkOtpValidation.validateAsync({ phone });
      const token = await this.#service.checkOTP({ phone, code });
      res
        .status(httpCodes.OK)
        .cookie("access_token", token, {
          httpOnly: true,
          secure: true,
          expires: new Date("March 17,2060 18:00:00"),
        })
        .send({
          statusCode: res.statusCode,
          data: {
            message: AuthMessages.LOGIN,
          },
        });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new AuthController();
