const ReservationMessages = Object.freeze({
  NotFound: "رزور یافت نشد.",
  Created: "رزور جدید ایجاد شد، بعداز پرداخت ثبت نهایی میشه.",
  CreatedError: "مشکلی در ایجاد رزور پیش آمده لطفا مجددا امتحان کنید.",
  Updated: "رزور باموفقیت به‌روزرسانی شد.",
  UpdatedError: "مشکلی در به‌روزرسانی رزور پیش آمده لطفا مجددا امتحان کنید.",
  Deleted: "رزور باموفقیت حذف شد.",
  DeletedError: "مشکلی در حذف رزور پیش آمده لطفا مجددا امتحان کنید.",
  InvalidObjectId:"id معتبر نیست"
});
module.exports = { ReservationMessages };