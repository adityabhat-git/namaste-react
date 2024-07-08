import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const headingReactElement = (
  <h1 id="heading" tabIndex="5">
    Namaste React from JSX React Element🚀
  </h1>
);

//React Component
const HeadingReactComponent = () => (
  <h1 id="heading" tabIndex="5">
    Namaste React from JSX React Component🚀
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//render React Element
//root.render(headingReactElement);

//render React Component
root.render(<HeadingReactComponent />);

