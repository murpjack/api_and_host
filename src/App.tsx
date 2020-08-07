declare var entertainment: any;
declare var dining: any;
import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import * as poop from "./store"


export default function App() {

useEffect(()=> {
  console.log("entertainment", entertainment);
  // console.log("dining", dining);
  // console.log("poop", poop);

},[]);

  const [selected, toggleSelected] = useState(false);
  function clicked() {
    console.log("happy days");
    toggleSelected(!selected);
  }
  return (
    <div>
      <div onClick={clicked}>Click me</div>
      <h1>This is only a handlebars file by {!selected ? "name" : "me"}.</h1>
    </div>
  );
}
