const NotFoundHandler = (app) => {
  app.use((req, res, next) => {
    res.status(404).send({
      statusCode: res.statusCode,
      error: {
        message: `${
          req.url
        } route not found by ${req.method.toUpperCase()} method.`,
      },
    });
  });
};
module.exports = { NotFoundHandler };
