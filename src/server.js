require("dotenv").config();
const express = require("express");
const app = express();

const routes = require("./routes");

app.use(routes);

const port = process.env.APP_PORT || 3333;
server.listen(port, () => {
  console.log(`[app.js] > Server running in ${process.env.APP_URL}`);
});