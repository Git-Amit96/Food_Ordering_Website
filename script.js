import React from "react";
import ReactDOM from "react-dom/client";

/*Basic syntax to create an element using react.*/
//.createElement() takes 3 arguments -> tagName, object, InnerText; 
const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
//ReactDOM.createRoot() create a root where all react code renders.
const root = ReactDOM.createRoot(document.getElementById("root"));

const divNew = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "children 1" },
        [React.createElement("h1", {}, "Hello i am First Nested Heading"),
        React.createElement("h2", {}, "Hello i am  Second Nested Heading")
        ]
    ), React.createElement("div", { id: "children 2" },
        [React.createElement("h1", {}, "Hello i am First Nested Heading"),
        React.createElement("h2", {}, "Hello i am  Second Nested Heading")
        ]
    )]
)

//render replaces all the html inside the root.
root.render(divNew);
// console.log(divNew);
