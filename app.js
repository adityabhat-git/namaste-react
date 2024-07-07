import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
console.log(heading);
// to make these kind of elements in react , it becomes a little clumsy and lengthy process.So facebook developers created some
//thing known as JSX. Its a syntax for writing react code / creating react elements. JSX is different than React.

//JSX is not HTML inside JS. it is having HTML LIKE SYNTAX.
// JSX is converted to React.CreateElement using Babel.
// JSX written in single line is a valid JSX
// In case you want to write in multiple lines then JSX needs to be wrapped inside paranthesis () to be valid. Since babel has to 
// understand the JSX for compilation, it has be inside paranthesis in case of multiple lines JSX.
const jsxHeading = <h1 id="heading">Namaste React from JSX 🚀</h1>;
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
