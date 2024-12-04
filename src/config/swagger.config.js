const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerConfig = (app) => {
  const swaggerDocument = swaggerJsDoc({
    swaggerDefinition: {
      openapi: "3.0.3",
      failOnErrors: true,
      info: {
        title: "Accommodation",
        description: "رزرو اقامتگاه",
        version: "1.0.0",
      },
      servers: [
        {
          name: "develop",
          url: "http://localhost:3000",
        },
      ],
      tags: [
        {
          name: "Accommodation-Option",
          description: "Accommodation-Option modules and routes",
        },
        {
          name: "Accommodation",
          description: "Accommodation modules and routes",
        },
        {
          name: "User",
          description: "User modules and routes",
        },
        {
          name: "Auth",
          description: "Auth modules and routes",
        },
      ],
    },
    apis: [process.cwd() + "/src/**/*.swagger.js"],
  });
  const swagger = swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      validatorUrl: false,
      defaultModelsExpandDepth: -1,
    },
    explorer: false,
  });
  app.use("/api/swagger", swaggerUi.serve, swagger);
};
module.exports = { swaggerConfig };
