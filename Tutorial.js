import React from "react";
import ReactDOM from "react-dom/client";

// ? ************************* Core React to Create Element *****************************
// ? Basic syntax to create an element using react.

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
console.log(divNew);


// ?  ************************************  JSX  *****************************************
// Jsx is not html, they both atr completely different. JSX is HTML like syntax


//React element
const heading2 = (
    <h1 className="head">
        Namaste React using JSX
    </h1>
);

const newHeading = (
    <span>This is Span
        <br />
    </span>

);

root.render(heading2);
// JSX code it transpiled before it reaches the JS Engine by bundler like PARCEl-> Babel Package.
// To give attribute in JSX we have to write in CamelCase.
// If writting JSX in multiple lines use ();


// ? ****************************  React Functional Components  ********************************
// a funtction that returns a react element.

const HeadingComponent1/*Always give name in Capital Letter*/ = () => {
    // it return a JSX i.e a react element.
    return (<div className="container">
        <h1 className="heading">
            {/* This is a components composition*/}
            Hello World this is Functional Component 1.</h1>
        <HeadingComponent2 />
        {heading2}
    </div>)
}
//OR 
//Both Valid Syntax
const HeadingComponent2 = () => (
    <h2 className="heading">
        {newHeading}
        Hello World this is Functional Component 2.
    </h2>
)

//? This is the way to render a funtional Component.
root.render(<HeadingComponent1 />)


// ? ********************* Ways to Export Components ************************

// There are 2 ways to export components or elements:-

// 1. export default component_name : This method will only export 1 single component from a file.
// 2. export component_name : This method will allow you to export multiple components from a single file. It is known as named export.




// ? ********************* Ways to Import Components ************************

// 1. When exported using exoprt default component_name: import component_name from File_Path.
// 2. When exported using named export: import {element_name} from File_Path.




// ? *********************** Best Way to Structure Files and folders *************************
// 1. Always make seperate files for all components
// 2. Never put mock Data, url links in components file. Better to make a seperate folder for all the common elements and create a file there named as utils or common or utility.


/**
 * ? ****************** React Hooks ***********************
 * React hooks are normal javascript functions;
 * First we have to import them from React Package using named import command: import {useState} from "react" for importing state hook
 * const [stateVariableName, setStateVariable] = useState([defaultValue]); to create stateVariable
 * whenever a state variable updates, React will render that component.
 */

/** 
* ? **************** Monolith Architecture **********************
*  All the small small components like UI, API, Authentication, etc are in the same project.
* 
* ? **************** Micro Architecture *************************
*  All small components/services are combined to form a single large project.
*  It is known as seperation of concerns and single responsibility principle.
*/

// ? ******************* useEffect **********************
// It is just like a normal JS Function like useState.
// It takes 2 arguments: a) callBack Function , b) dependency List/Array. 
// This useEffect is called automatically when the Body Component is completely rendered.
// so the render cycle is like that: Body -> useEffect -> its callBack Function.
