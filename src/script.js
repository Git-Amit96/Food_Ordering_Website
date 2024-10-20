import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.jsx";
// createBrowserRouter help to create route and RouterProvider help to provide essential configuration to render it on browser.
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Shimmer from "./components/Shimmer.jsx";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

const About = lazy(() => import("./components/About.jsx"));

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Amit",
        }
        setUserName(data.name);
    }, [])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUse: userName, setUserName }}>
                <div className="app bg-blue-100">
                    <Header />
                    {/* Outlet gets replaced by the children routes in AppLayout component. */}
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
};

// configure routes, it takes an array that contains multiple objects for different paths.
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer />}><About /></Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:restId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />
            },

        ],
        errorElement: <Error />
    },
])

root.render(<RouterProvider router={appRouter} />);