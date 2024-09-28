import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.jsx";
// createBrowserRouter help to create route and RouterProvider help to provide essential configuration to render it on browser.
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";



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
            {/* Outlet gets replaced by the children routes in AppLayout component. */}
            <Outlet />  
        </div>
    )
};

// configure routes, it takes an array that contains multiple objects for different paths.
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurants/:restId",
                element: <RestaurantMenu/>,
            }
        ],
        errorElement: <Error/>
    },
])

root.render(<RouterProvider router= {appRouter}/>);