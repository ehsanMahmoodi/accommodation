const AuthMessages = Object.freeze({
  OTP_SEND: "رمز یکبارمصرف ارسال شد.",
  OTP_SEND_ERROR: "رمز یکبارمصرف ارسال شد.",
  OTP_NOT_EXPIRED: "رمز یکبارمصرف هنوز منقضی نشده است.",
  OTP_EXPIRED: "رمز یکبارمصرف منقضی شده",
  OTP_NOT_MATCH: "رمز یکبارمصرف اشتباه می باشد.",
  NotFound: "کاربری با شماره تلفن وارد شده یافت نشد.",
  INTERNAL_SERVER_ERROR: "خطای داخلی لطفا مجددا امتحان کنید.",
  LOGIN: "باموفقیت وارد شدید.",
});
module.exports = { AuthMessages };
