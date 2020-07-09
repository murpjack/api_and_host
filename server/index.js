
const express = require("express");
// const routes = require("require-dir-all")("./routes", {
//   recursive: true
// });
const routes = require("./routes");

const PORT = 8080;
const app = express();

app.use('/', routes);

app.listen(PORT, () => console.log("Server listening on http://localhost:" + PORT + "/"));
