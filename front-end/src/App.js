// This App is written with Typescript. Node doesn't like to read a .tsx file in server/site.js
// TODO: Rewrite server side using Typescript.

import React, { useState } from "react";

export default function App() {
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
