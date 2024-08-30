/*

<div id="parent">
    <div id="child1">

        <h1>I am h1 tag!</h1>
        <h2>I am h2 tag!</h2>

    </div>
      <div id="child2">

        <h1>I am h1 tag!</h1>
        <h2>I am h2 tag!</h2>

    </div>
</div>

 ReactElement(javascript object) = HTML(Browser Understandable)
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement(
    "div",
    { id: "child1" },
    [React.createElement("h1", {}, "I am h1 tag!"), React.createElement("h2", {}, "I am h2 tag!")]
  ), 
  React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "I am h1 tag!"), React.createElement("h2", {}, "I am h2 tag!")]
  )
]
);


console.log(parent); // it will return javascript object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // render will convert above object into h1 tag and place over dom
