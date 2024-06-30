/**
 * React uses philosophy of manipulating DOM using JS
 * The most costliest operation on a DOM is to append some nodes in the DOM and then removing it based on the requirement
 * So react was built to handle/manipulate DOM using JS in an efficient manner
 * React.createElement() creates a react object of type h1 in this case, which has some props
 * and wehnever it is rendered , it is converted into html and puts it up into the DOM
 * React.createElement() third parameter can be a single child or multiple children. If you pass an array of elements to children it can
 * create siblings
 * React.render() will replace everything inside root which is already exisiting there
 * Order of files matters
 * React is only rendered in the root defined.
 * */

// const heading = React.createElement("h1", {
//     id:"heading"
// }, "Hello World from React! ");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
 * Create nested elements in side react
 * <div id="parent">
 *  <div id = "child">
 *      <h1> I am an H1 </h1>
 *      <h2> I am an H2 </h2>
 *   </div>
 * <div id = "child2">
 *      <h1> I am an H1 </h1>
 *      <h2> I am an H2 </h2>
 *   </div>
 *  </div>
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "child_heading1" }, "I am an H1"),
    React.createElement("h2", { id: "child_heading2" }, "I am an H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "child2_heading1" }, "I am an H1"),
    React.createElement("h2", { id: "child2_heading2" }, "I am an H2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
