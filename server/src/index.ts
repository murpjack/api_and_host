import express from "express";
import app from "./app.js";
import db from "./db/index.js";

import path from "path";

// Front-end entry point
// import site from "./static/site";

const PORT = 8080;

// DATABASE
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// FRONT END
// app.use("/", site);
app.use("/portal", express.static(path.resolve(__dirname, "../front-end/public/portal")));
app.use("/static", express.static(path.resolve(__dirname, "../front-end/public/static")));

app.listen(PORT, () => console.log(`Server on http://localhost: ${PORT}/`));
