// const heading = React.createElement('h1',{id:"heading"},"Hello World From React!"); //object
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading);

/*
<div id="parent">
    <div id="child1">
        <h1></h1>
        <h2></h2>
    </div>
    <div id="child2">
        <h1></h1>
        <h2></h2>
    </div>
</div>

ReactElement (Object) => HTML(Browser Understands)
For execute this you have to uncomment CDN links
*/

import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "CHILD1 H1"),
//     React.createElement("h2", {}, "CHILD1 HELLO FROM NESTED H2"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "CHILD2 H1"),
//     React.createElement("h2", {}, "CHILD2 HELLO FROM NESTED H2"),
//   ]),
// ]);
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(parent);

//React Element
const elem = <span>React Element</span>;
const jsxHeading = <h1 className="head">Namste React using JSX 🚀</h1>;

// React Functional Component
const Title = () => {
  return <h1>{elem} Title</h1>;
};
const number = 1000;
const HeadingComponent1 = () => {
  return (
    <div id="container">
      {jsxHeading}
      <h2>{100 + 300 + number}</h2>
      {/* all are same */}
      <Title></Title>
      <Title />
      {Title()}
      <h1>Namste React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent1 />);
