require("dotenv").config();
const express = require("express");
const { MainRouter } = require("./src/main.routes");
const { ErrorHandler } = require("./src/common/exceptions/error-handler");
const {
  NotFoundHandler,
} = require("./src/common/exceptions/not-found-handler");
const { swaggerConfig } = require("./src/config/swagger.config");
const main = async () => {
  // initialilize app
  const app = express();
  // config's
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  require("./src/config/mongoose.config");
  swaggerConfig(app)
  // routing
  app.use(MainRouter);
  ErrorHandler(app);
  NotFoundHandler(app);
  // connection app
  const PORT = process.env.PORT;
  const BASE_URL = process.env.BASE_URL;
  app.listen(PORT, () => console.log(`server run: ${BASE_URL}:${PORT}`));
};
main()