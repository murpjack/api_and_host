import express from "express";
import axios from "axios";
const fs = require("fs");

import App from "../../src/App";
import React from "react";
import { renderToString } from "react-dom/server";

const router = express.Router();

router.get("/", async (req, res) => {
  const checkResponse = (response) => response.status === 200 && response;

  const baseURL = "http://localhost:8080/api";
  axios.get(`${baseURL}/leisure/getallvenues`).then(checkResponse);
  axios.get(`${baseURL}/advice/getallwisdom`).then(checkResponse);
  axios.get(`${baseURL}/dining/getallvenues`).then(checkResponse);

  a.then((response) => {
    console.log("woopWoop", response.data);
    const entertainment = "response.data.entertainment";
    // const dining = data.data.dining;
    const reactComp = renderToString(<App />);

    const indexHtml = fs.readFileSync("./public/index.html", "utf8");
    const indexSplit = indexHtml.split('id="app">');
    const htmlBSplit = indexSplit[1].split("//Variables:");
    const newHtmlB =
      htmlBSplit[0] +
      `const entertainment = ${JSON.stringify(entertainment)};` +
      // `const dining = ${JSON.stringify(dining)};` +
      htmlBSplit[1];
    const newHtml = indexSplit[0] + 'id="app">' + reactComp + newHtmlB;

    res.send(newHtml);
  });
});

module.exports = router;
