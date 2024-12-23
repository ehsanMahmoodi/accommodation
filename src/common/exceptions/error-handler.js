const ErrorHandler = (app) => {
  app.use((err, req, res, next) => {
    // console.log(JSON.stringify(err,null,4));
    let status = err.code || err.status || err.statusCode;
    if (!status || isNaN(+status) || +status > 511 || +status < 200)
      status = 500;
    res.status(status).send({
      statusCode: res.statusCode,
      error: {
        message: err.message || err.stack || "internal server error.",
        path: err?.errorPath,
      },
    });
  });
};
module.exports = { ErrorHandler };
