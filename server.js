const express = require('express');
const app = express();

app.get("/", function (request, response, next) {
  try {
      return response.json({
        application: "SAAE",
        developer: "Lisma Team"
      });
  } catch (error) {
    next(error);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`[app.js] > Server listening on port ${port}!`);
});
