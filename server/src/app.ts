import express from "express";
const routes = require("require-dir-all")("./routes", { recursive: true });

export const app = express();

// API
app.use(express.json());
app.use("/api", routes.leisureRouter);
app.use("/api", routes.diningRouter);
app.use("/api", routes.itineraryRouter);

export default app;