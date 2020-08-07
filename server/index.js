const express = require("express");
import path from "path";

const db = require("./db");
const routes = require("require-dir-all")("./routes", { recursive: true });
const site = require("./static/site");

const PORT = 8080;
const app = express();

// DATABASE
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("MongoDB connection success"));

// API
app.use("/api", routes.leisureRouter);
app.use("/api", routes.diningRouter);
app.use("/api", routes.itineraryRouter);

// FRONT END
app.use("/", site);
app.use("/portal", express.static(path.resolve(__dirname, "../public/portal")));
app.use("/static", express.static(path.resolve(__dirname, "../public/static")));

app.listen(PORT, () => console.log(`Server on http://localhost: ${PORT}/`));
