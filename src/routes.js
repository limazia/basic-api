const express = require("express");

const routes = express.Router();

routes.get("/", function (request, response, next) {
  try {
      return response.json({
        application: "SAAE",
        developer: "Lisma Team"
      });
  } catch (error) {
    next(error);
  }
});

module.exports = routes;
