import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.jsx";



const root = ReactDOM.createRoot(document.getElementById("root"));

/* ****************  Basic Frame of my website  ****************
* Header
  - Logo
  - Navigation Menu
 
* Body 
  - Search
  - Restaurent Container
      -Restaurent Cards
           - image
           - title
           - ratings        
           - price        
* Footer
    - Disclaimer
    - Links
    - Address
    - Contact
*/


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />

        </div>
    )
}

root.render(<AppLayout />);