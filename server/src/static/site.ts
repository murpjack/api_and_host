const Future = require("fluture");
import express from "express";
// import axios from "axios";
// const fs = require("fs");

// import App from "./../front-end/src/App";
// import React from "react";
// import { renderToString } from "react-dom/server";

const router = express.Router();

router.get("/", (req, res) => {
  const baseURL = "http://localhost:8080/api";
  const leisureURL = `${baseURL}/leisure/getallvenues`;
  const plansURL = `${baseURL}/plan/getallitineraries`;
  const diningURL = `${baseURL}/dining/getallvenues`;
  const adviceURL = `${baseURL}/advice/getallwisdom`;

  // const checkResponse = (response) =>
  //   response.status === 200 && response.data.data;

  // const getF = Future.encaseP(axios.get);
  // const activitiesF = () => getF(leisureURL).pipe(Future.map(checkResponse));
  // const plansF = () => getF(plansURL).pipe(Future.map(checkResponse));
  // const diningF = () => getF(diningURL).pipe(Future.map(checkResponse));
  // const adviceF = () => getF(adviceURL).pipe(Future.map(checkResponse));

  // Future.parallel(3)([adviceF(), activitiesF(), plansF(), diningF()])
  //   .pipe(
  //     Future.map((response) => {
  //       // Before creating itineraries, check each list for required ID
  //       // Otherwise itinerary can't be shown.
  //       // An alternative may be to get 4 itineraries just in case and still show 3??
  //       const hasID = (arr, id) => arr.filter((e) => e._id === id);

  //       const hasAdvice = hasID(response, plans.adviceID);
  //       const hasDining = hasID(response, plans.diningID);
  //       const hasActivities = hasID(response, plans.activityID);

  //       if (hasAdvice && hasDining && hasActivities) {
  //         return plans.map((plan) => ({
  //           status: "SUCCESS",
  //           message: "",
  //           itineraryID: 1,
  //           diner: {},
  //           activity: {},
  //           advice: {},
  //         }));
  //       }

    //     return {
    //       status: "NOT_SUCCESSFUL",
    //       message:
    //         "Oops. This has never happened to me before! Thank you for being patient.",
    //       diner: null,
    //       activity: null,
    //       advice: null,
    //     };
    //   })
    // )
    // .pipe(Future.fork(console.error)(console.log));

  // const entertainment = "response.data.entertainment";
  // const dining = data.data.dining;
  // const reactComp = renderToString(<App />);

  // const indexHtml = fs.readFileSync("./../front-end/public/index.html", "utf8");
  // const indexSplit = indexHtml.split('id="app">');
  // const htmlBSplit = indexSplit[1].split("//Variables:");
  // const newHtmlB =
  //   htmlBSplit[0] +
  //   `const entertainment = ${"JSON.stringify(entertainment)"};` +
  //   // `const dining = ${JSON.stringify(dining)};` +
  //   htmlBSplit[1];
  // const newHtml = indexSplit[0] + 'id="app">' + reactComp + newHtmlB;

  res.send("newHtml");
});

module.exports = router;
