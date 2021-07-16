const express = require("express");

const routes = express.Router();

routes.get("/", function (request, response, next) {
  try {
    return response.json({
      application: process.env.APP_NAME,
      developer: "Lisma Team"
    });
  } catch (error) {
    next(error);
  }
});

routes.get("/welcome", function (request, response, next) {
  try {
    return response.json({
      message: "Welcome to Basic API"
    });
  } catch (error) {
    next(error);
  }
});

module.exports = routes;