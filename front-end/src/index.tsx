import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

// import axios from "axios";
// axios
//   .get("http://localhost:8080/api/entertainment/getvenuebyid/3")
//   .then((data) => {
//     const name = data.data.entertainment.name;
hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  , document.getElementById("app"));
// });
